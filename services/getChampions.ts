export default async function getChampionsData() {
	const response = await fetch(
		"https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json"
	);

	return response.json();
}
