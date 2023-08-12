export default async function getSummoner(summonerName: string) {
	const summonerIdResponse = await fetch(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { id } = await summonerIdResponse.json();

	const responseRanked = await fetch(
		`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.DATA_API_KEY}`
	);

	return responseRanked.json();
	const response = await fetch(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	return response.json();
}
