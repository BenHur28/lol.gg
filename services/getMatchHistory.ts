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

	const data = await response.json();

	const games: Game[] = [];

	data.map((x: string) => {
		let game: Game = {
			gameId: "",
			participants: [],
			team1playerlist: [],
			team2playerlist: [],
			queueId: 0,
			info: {
				participants: [],
			},
		};
		games.push(game);
	});

	const matches: any[] = [];
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

	matches.map((match, index) => {
		games[index].gameId = match.metadata.matchId;
		games[index].participants = match.metadata.participants;
		games[index].info.participants = match.info.participants;
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
						if (game.team1playerlist.length < 5) {
							game.team1playerlist.push(p.name);
						} else {
							game.team2playerlist.push(p.name);
						}
					})
				);
			})
		);
	};
	await getPlayerNames();
	console.log(games);
	return games;
}
