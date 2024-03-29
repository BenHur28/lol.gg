import getItemsData from "@/services/getItems";
import StarterItems from "./components/StarterItems";
import ConsumableItems from "./components/ConsumableItems";
import Boots from "./components/Boots";
import BasicItems from "./components/BasicItems";
import EpicItems from "./components/EpicItems";
import LegendaryItems from "./components/LegendaryItems";
import MythicItems from "./components/MythicItems";
import Trinkets from "./components/Trinkets";

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
			(res.data[item].inStore != false ||
				undefined ||
				res.data[item].specialRecipe) &&
			res.data[item].maps[11] === true &&
			!res.data[item].requiredChampion &&
			res.data[item].name !== "Obsidian Edge"
		) {
			items.push(res.data[item]);
		}
	}
	return (
		<div className="flex flex-col items-center text-white w-3/5 mx-auto">
			<div className="mt-32 ">
				<h1 className="text-white text-4xl font-bold mb-2">
					League of Legends Items
				</h1>
				<p className="text-[#cddcfe] break-words">
					All in-game items for League of Legends starting items, and
					consumables. Up-to-date stats, passives, actives, and gold costs
				</p>
			</div>
			<StarterItems items={items} />
			<ConsumableItems items={items} />
			<Trinkets items={items} />
			<Boots items={items} />
			<BasicItems items={items} />
			<EpicItems items={items} />
			<LegendaryItems items={items} />
			<MythicItems items={items} />
		</div>
	);
}
