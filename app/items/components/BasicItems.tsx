import Item from "./item";

export default async function BasicItems({ items }: ItemProps) {
	return (
		<div className="mt-8 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Basic Items</h1>
			<div className="grid min-[320px]:grid-cols-4 min-[375px]:grid-cols-6 min-[768px]:grid-cols-10 min-[1024px]:grid-cols-16 min-[1440px]:grid-cols-20 gap-3 text-white break-words">
				{items.map(
					(item) =>
						item.gold.total <= 1400 &&
						item.into?.length >= 1 &&
						!item.from &&
						!item.tags?.includes("Consumable") &&
						item.name !== "Boots" &&
						item.name !== "Dark Seal" &&
						item.name !== "Watchful Wardstone" && (
							<Item key={item.name} item={item} />
						)
				)}
			</div>
		</div>
	);
}
