export default async function getChampionData(championName: string) {
	const search = championName.charAt(0).toUpperCase() + championName.slice(1);
	const response = await fetch(
		`http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion/${search}.json`
	);

	return response.json();
}
