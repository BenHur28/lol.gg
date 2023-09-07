import Image from "next/image";
import Link from "next/link";

export default async function Trinkets({ items }: ItemProps) {
	return (
		<div className="mt-8 p-4 rounded-sm bg-champBG ">
			<h1 className="text-start mb-4">Trinkets</h1>
			<div className="grid min-[320px]:grid-cols-4 min-[375px]:grid-cols-6 min-[768px]:grid-cols-10 min-[1024px]:grid-cols-16 min-[1440px]:grid-cols-20 gap-3 text-white">
				{items.map(
					(item) =>
						item.gold.total === 0 && (
							<>
								<Link key={item.name} href={`/items/${item.name}`}>
									<Image
										className="border border-itemBorder rounded-sm"
										height={36}
										width={36}
										src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
										alt=""
									/>
								</Link>
							</>
						)
				)}
			</div>
		</div>
	);
}
