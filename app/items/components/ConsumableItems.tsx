import Item from "./item";

export default async function ConsumableItems({ items }: ItemProps) {
	return (
		<div className="mt-8 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Consumable Items</h1>
			<div className="grid min-[320px]:grid-cols-4 min-[375px]:grid-cols-6 min-[768px]:grid-cols-10 min-[1024px]:grid-cols-16 min-[1440px]:grid-cols-20 gap-3 text-white break-words">
				{items.map(
					(item) =>
						item.tags?.includes("Consumable") && (
							<Item key={item.name} item={item} />
						)
				)}
			</div>
		</div>
	);
}
