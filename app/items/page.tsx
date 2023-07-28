import getItemsData from "@/services/getItems";

export async function generateMetadata() {
	return {
		title: "Items list",
		description: "Browse all items.",
	};
}

export default async function ItemsPage() {
	const itemData = getItemsData();
	const res = await itemData;
	const items: Item[] = [];
	for (let item in res.data) {
		if (
			(res.data[item].inStore != false || undefined) &&
			res.data[item].maps[11] === true &&
			!res.data[item].requiredChampion &&
			res.data[item].name !== "Obsidian Edge"
		) {
			items.push(res.data[item]);
		}
	}
	console.log(items.length);
	return (
		<div className="flex flex-col items-center text-white text-center">
			<ul>
				{items.map((item) => (
					<li key={item.name}>
						<img
							src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
							alt=""
						/>
						<span>
							{item.name} {item.gold.total}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
