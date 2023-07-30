import React from "react";

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
	return <div>{itemName}</div>;
}
