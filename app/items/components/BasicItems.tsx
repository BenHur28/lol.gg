import Image from "next/image";

export default async function BasicItems({ items }: ItemProps) {
	return (
		<div className="mt-16 p-4 rounded-sm bg-champBG">
			<h1 className="text-start mb-4">Basic Items</h1>
			<div className="grid grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						item.gold.total <= 1400 &&
						item.into?.length >= 1 &&
						!item.from &&
						!item.tags?.includes("Consumable") &&
						item.name !== "Boots" &&
						item.name !== "Dark Seal" &&
						item.name !== "Watchful Wardstone" && (
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
