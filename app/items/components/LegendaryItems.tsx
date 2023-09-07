import Item from "./item";

export default async function LegendaryItems({ items }: ItemProps) {
	return (
		<div className="mt-8 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Legendary Items</h1>
			<div className="grid min-[320px]:grid-cols-4 min-[375px]:grid-cols-6 min-[768px]:grid-cols-10 min-[1024px]:grid-cols-16 min-[1440px]:grid-cols-20 gap-3 text-white">
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
							<Item key={item.name} item={item} />
						)
				)}
			</div>
		</div>
	);
}
