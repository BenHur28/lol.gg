export default async function getSummoner(summonerName: string) {
	const summonerIdResponse = await fetch(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { id, profileIconId } = await summonerIdResponse.json();

	const responseRanked = await fetch(
		`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.DATA_API_KEY}`
	);

	const data = await responseRanked.json();
	const { queueType, tier, rank, wins, losses } = data[1];
	return { id, profileIconId, queueType, tier, rank, wins, losses };
}
