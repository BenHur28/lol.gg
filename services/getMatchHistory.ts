export default async function getMatchHistory(
	summonerName: string,
	region: string
) {
	const matches: Response[] = [];
	const summonerIdResponse = await fetch(
		`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { puuid } = await summonerIdResponse.json();

	const response = await fetch(
		`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${process.env.DATA_API_KEY}`
	);

	const data = await response.json();
	async function getMatches() {
		await Promise.all(
			data.map(async (match: any) => {
				const res = await fetch(
					`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.DATA_API_KEY}`
				);
				const m = await res.json();
				console.log(m);
				matches.push(m);
			})
		);
	}
	getMatches();
	return matches;
}
