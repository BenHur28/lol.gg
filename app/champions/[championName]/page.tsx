import getChampionData from "@/services/getChampion";
import Image from "next/image";

type Props = {
	params: {
		championName: string;
	};
};

export async function generateMetadata({ params: { championName } }: Props) {
	return {
		title: `${championName} Information`,
		description: `Champion page for ${championName}`,
	};
}

export default async function ChampionPage({
	params: { championName },
}: Props) {
	const championData = getChampionData(championName);
	const res = await championData;
	return (
		<div className="text-white text-center flex flex-col items-center">
			<h1 className="mt-32 mb-10">{res.data[championName].id}</h1>
			<Image
				height={96}
				width={86}
				src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${res.data[championName].image.full}`}
				alt=""
			/>
		</div>
	);
}
