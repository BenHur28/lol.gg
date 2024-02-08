import getItemsData from "@/services/getItems";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: {
		itemName: string;
	};
};

export async function generateMetadata({ params: { itemName } }: Props) {
	return {
		title: `${itemName.replace(/%20/g, " ")} | Information`,
		description: `Item page for ${itemName}`,
	};
}

export default async function page({ params: { itemName } }: Props) {
	const itemData = getItemsData();
	const res = await itemData;
	const singleItem: Item[] = [];
	for (let item in res.data) {
		if (res.data[item].name == itemName.replace(/%20/g, " ")) {
			singleItem.push(res.data[item]);
		}
	}
	return (
		<div className="flex flex-col pt-32 w-2/5 mx-auto">
			<div className="flex items-center">
				<Image
					className="border border-itemBorder rounded-sm"
					height={72}
					width={72}
					src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${singleItem[0].image.full}`}
					alt=""
				/>
				<div className="text-4xl text-white font-semibold ml-4 break-words">
					{itemName.replace(/%20/g, " ")}
				</div>
			</div>
			<div className="flex flex-col bg-champBG p-4 mt-8 rounded-sm">
				<div className="text-white text-xl mb-4">Recipe</div>
				<div className="flex gap-x-2 mb-4">
					<Image
						className="border border-itemBorder rounded-sm"
						height={40}
						width={40}
						src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${singleItem[0].image.full}`}
						alt=""
					/>
					<div className="flex flex-col">
						<p className="text-sm text-white">{singleItem[0].name}</p>
						<p className="text-sm text-amber-500">{singleItem[0].gold.total}</p>
					</div>
				</div>

				<div className="flex flex-col gap-y-2">
					{singleItem[0].from &&
						singleItem[0].from.map((item) => (
							<div key={item} className="flex flex-col">
								<div className="flex min-[500px]:pl-12 gap-x-2">
									<Link href={`/items/${res.data[item].name}`}>
										<Image
											className="border border-itemBorder rounded-sm"
											height={40}
											width={40}
											src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${res.data[item].image.full}`}
											alt=""
										/>
									</Link>
									<div className="flex flex-col">
										<p className="text-sm text-white">{res.data[item].name}</p>
										<p className="text-sm text-amber-500">
											{res.data[item].gold.total}
										</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			{singleItem[0].into && (
				<div className="flex flex-col bg-champBG p-4 mt-8 rounded-sm">
					<div className="text-white text-xl mb-4">Builds Into</div>
					<div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[800px]:grid-cols-1 gap-y-4">
						{singleItem[0].into.map((item) =>
							res.data[item].maps[11] == true ? (
								<div key={item} className="flex items-center ">
									<Link href={`/items/${res.data[item].name}`}>
										<Image
											className="border border-itemBorder rounded-sm mr-2"
											height={30}
											width={30}
											src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${res.data[item].image.full}`}
											alt=""
										/>
									</Link>
									<div className="text-white text-sm break-words">
										{res.data[item].name}
									</div>
								</div>
							) : (
								""
							)
						)}
					</div>
				</div>
			)}
		</div>
	);
}
