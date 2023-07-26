import getItemsData from "@/services/getItems";

export default async function ItemsPage() {
	const itemData = getItemsData();
	const res = await itemData;
	const items: Item[] = [];
	for (let item in res.data) {
		if (res.data[item].inStore != false) {
			items.push(res.data[item]);
		}
	}
	console.log;
	return (
		<div className="flex flex-col items-center text-white text-center">
			<ul>
				{items.map((item) => (
					<li key={item.name}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}
