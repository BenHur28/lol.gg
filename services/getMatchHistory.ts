export default async function getMatchHistory(
	summonerName: string,
	region: string
) {
	const summonerIdResponse = await fetch(
		`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { puuid } = await summonerIdResponse.json();

	const response = await fetch(
		`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=1&count=1&api_key=${process.env.DATA_API_KEY}`
	);

	const matches: any[] = [];
	const data = await response.json();
	async function getMatches() {
		await Promise.all(
			data.map(async (match: any) => {
				const res = await fetch(
					`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.DATA_API_KEY}`
				);
				const m = await res.json();
				matches.push(m);
			})
		);
	}
	await getMatches();

	const games: Game[] = [];
	matches.map((match) => {
		let game: Game = {};
		game.gameId = match.metadata.matchId;
		game.participants = match.metadata.participants;
		game.playerlist = [];
		games.push(game);
	});

	async function getParticipants() {
		await Promise.all(
			games.map((game: any) => {
				game.participants.map(async (playerId: string) => {
					const playerlist: string[] = [];
					const res = await fetch(
						`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${playerId}?api_key=${process.env.DATA_API_KEY}`
					);
					const p = await res.json();
					playerlist.push(p.name);
					game.playerlist = playerlist;
				});
			})
		);
	}

	await getParticipants();
	console.log(games);
	return matches;
}
