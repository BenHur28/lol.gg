import Image from "next/image";

export default async function LegendaryItems({ items }: ItemProps) {
	return (
		<div className="mt-16 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Legendary Items</h1>
			<div className="grid grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						((item.depth >= 2 &&
							!item.into &&
							item.from?.[0] != 1001 &&
							item.name != "Corrupting Potion") ||
							item.name === "Muramana" ||
							item.name === "Fimbulwinter" ||
							item.name === "Seraph's Embrace" ||
							item.name === "Prowler's Claw" ||
							item.name === "Shard of True Ice" ||
							item.name === "Black Mist Scythe" ||
							item.name === "Bulwark of the Mountain" ||
							item.name === "Pauldrons of Whiterock") && (
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
