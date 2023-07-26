export default async function getItemsData() {
	const response = await fetch(
		"http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/item.json"
	);
	return response.json();
}
