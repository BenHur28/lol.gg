import getItemsData from "@/services/getItems";
import Image from "next/image";

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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Starter Items</h1>
				<div className="grid grid-cols-20 gap-3 text-white">
					{items.map(
						(item) =>
							item.gold.total <= 450 && (
								<Image
									className="border border-champBorder"
									height={36}
									width={36}
									src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
									alt=""
								/>
							)
					)}
				</div>
			</div>
			{/* <ul>
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
			</ul> */}
		</div>
	);
}
