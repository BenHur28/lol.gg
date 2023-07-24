export default async function getChampionsData() {
	const response = await fetch(
		"http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json"
	);

	return response.json();
}
