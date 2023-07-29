import Image from "next/image";

export default async function StarterItems({ items }: ItemProps) {
	return (
		<div className="mt-16 p-4 rounded-sm bg-champBG ">
			<h1 className="text-start mb-4">Recommended Starting Items</h1>
			<div className="grid grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						item.gold.total <= 450 &&
						item.gold.total >= 350 &&
						(!item.into || item.into?.length <= 1) && (
							<>
								<Image
									className="border border-itemBorder rounded-sm"
									height={36}
									width={36}
									src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
									alt=""
								/>
							</>
						)
				)}
			</div>
		</div>
	);
}
