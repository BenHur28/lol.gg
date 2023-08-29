export default async function getSummoner(
	summonerName: string,
	region: string
) {
	const summonerIdResponse = await fetch(
		`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.DATA_API_KEY}`
	);
	const { id, profileIconId } = await summonerIdResponse.json();

	const responseRanked = await fetch(
		`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.DATA_API_KEY}`
	);

	const data = await responseRanked.json();
	console.log(data);
	const { queueType, tier, rank, wins, losses } = data;
	return { id, profileIconId, queueType, tier, rank, wins, losses };
}
