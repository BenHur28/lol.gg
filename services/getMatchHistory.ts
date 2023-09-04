export default async function getMatchHistory(
	summonerName: string,
	region: string
) {
	const summonerIdResponse = await fetch(
		`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { puuid } = await summonerIdResponse.json();

	const response = await fetch(
		`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=2&api_key=${process.env.DATA_API_KEY}`
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
		let game: Game = {
			participants: [],
		};
		game.gameId = match.metadata.matchId;
		game.participants = match.metadata.participants;
		game.playerlist = [];
		games.push(game);
	});

	const getPlayerNames = async () => {
		await Promise.all(
			games.map(async (game) => {
				await Promise.all(
					game.participants.map(async (player) => {
						const res = await fetch(
							`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${player}?api_key=${process.env.DATA_API_KEY}`
						);
						const p = await res.json();
						game.playerlist?.push(p.name);
					})
				);
			})
		);
	};

	await getPlayerNames();
	return matches;
}
