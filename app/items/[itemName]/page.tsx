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
		title: `${itemName} | Information`,
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
		<div className="pt-32 w-2/5 mx-auto">
			<div className="flex items-center">
				<Image
					className="border border-itemBorder rounded-sm"
					height={36}
					width={36}
					src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${singleItem[0].image.full}`}
					alt=""
				/>
				<div className="text-2xl text-white">
					{itemName.replace(/%20/g, " ")}
				</div>
			</div>
		</div>
	);
}
