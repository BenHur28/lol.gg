import Item from "./item";

export default async function MythicItems({ items }: ItemProps) {
	return (
		<div className="my-8 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Mythic Items</h1>
			<div className="grid min-[320px]:grid-cols-4 min-[375px]:grid-cols-6 min-[768px]:grid-cols-10 min-[1024px]:grid-cols-16 min-[1440px]:grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						((item.depth == 3 &&
							item.into?.length == 1 &&
							item.name != "Prowler's Claw") ||
							item.name == "Infinity Edge") && (
							<Item key={item.name} item={item} />
						)
				)}
			</div>
		</div>
	);
}
