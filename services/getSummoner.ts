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
	const filtered_data = data.filter(
		(d: { queueType: string }) => d.queueType != ""
	);
	return filtered_data;
}
