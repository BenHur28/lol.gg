import getItemsData from "@/services/getItems";
import Image from "next/image";
import StarterItems from "./components/StarterItems";

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
	return (
		<div className="flex flex-col items-center text-white text-center">
			<div className="">
				<h1>League of Legends Items</h1>
			</div>
			<StarterItems items={items} />
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Consumable Items</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Trinkets</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Boots</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Basic Items</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Epic Items</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Legendary Items</h1>
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
			<div className="mt-16 p-4 rounded-sm bg-champBG">
				<h1 className="text-start mb-4">Mythic Items</h1>
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
		</div>
	);
}
