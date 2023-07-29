import Image from "next/image";

export default async function EpicItems({ items }: ItemProps) {
	return (
		<div className="mt-16 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Epic Items</h1>
			<div className="grid grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						((item.gold.total <= 1500 &&
							item.from?.length >= 1 &&
							item.from?.[0] != 1001 &&
							item.name != "Corrupting Potion") ||
							item.name === "Watchful Wardstone" ||
							item.name === "Frostfang" ||
							item.name === "Harrowing Crescent" ||
							item.name === "Targon's Buckler" ||
							item.name === "Runesteel Spaulders") && (
							<Image
								className="border border-itemBorder rounded-sm"
								height={36}
								width={36}
								src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
								alt=""
							/>
						)
				)}
			</div>
		</div>
	);
}
