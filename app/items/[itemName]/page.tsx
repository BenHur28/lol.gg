import getItemsData from "@/services/getItems";
import React from "react";
import Image from "next/image";

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
				<div className="text-4xl text-white font-semibold ml-4">
					{itemName.replace(/%20/g, " ")}
				</div>
			</div>
			<div className="flex flex-col bg-champBG">
				<div>Recipe</div>
				{singleItem[0].from ? (
					""
				) : (
					<div>
						<Image
							height={40}
							width={40}
							src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${singleItem[0].image.full}`}
							alt=""
						></Image>
					</div>
				)}
				{singleItem[0].from &&
					singleItem[0].from.map((item) => <div key={item}>{item}</div>)}
			</div>
		</div>
	);
}
