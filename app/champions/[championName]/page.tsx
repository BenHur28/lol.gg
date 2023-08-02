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
		<div className="flex flex-col pl-20 mx-auto w-1/2 pt-32">
			<div className="flex flex-row w-full items-top">
				<Image
					className=""
					height={100}
					width={100}
					src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${res.data[championName].image.full}`}
					alt=""
				/>
				<div className="ml-3 flex flex-col">
					<h1 className="text-white text-4xl">{res.data[championName].id}</h1>
					<h2 className="flex-wrap text-white w-full">
						{res.data[championName].title}
					</h2>
					<span className="text-white">
						{championName} is a
						{res.data[championName].tags.map((tag: string) => (
							<span>{" " + tag + " "}</span>
						))}{" "}
						champion in League of Legends
					</span>
				</div>
			</div>
			<div className="text-white flex">
				{res.data[championName].spells.map((spell: any) => (
					<Image
						src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${spell.image.full}`}
						height={48}
						width={48}
						alt=""
					></Image>
				))}
			</div>
		</div>
	);
}
