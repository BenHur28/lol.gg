export default async function getSummoner(summonerName: string) {
	const response = await fetch(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	return response.json();
}
