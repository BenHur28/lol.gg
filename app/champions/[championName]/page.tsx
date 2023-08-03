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
	const hotkeys = ["Q", "W", "E", "R"];
	const championData = getChampionData(championName);
	const res = await championData;
	return (
		<div className="flex flex-col pl-20 mx-auto w-1/2 pt-32">
			<div className="flex flex-row w-full items-top">
				<Image
					className="border border-champBorder"
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
			<div className="ml-1 mt-10 p-4 text-white flex flex-row gap-2 w-full border border-champBorder bg-champBG justify-center">
				<div className="flex flex-col items-center">
					<Image
						className="rounded-sm border border-itemBorder"
						src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/passive/${res.data[championName].passive.image.full}`}
						height={48}
						width={48}
						alt=""
					/>
					<span className="relative -top-2 border border-champBorder rounded-sm bg-champBG px-1 text-sm">
						P
					</span>
				</div>

				{res.data[championName].spells.map((spell: any) => (
					<div className="flex flex-col items-center">
						<Image
							className="rounded-sm border border-itemBorder"
							src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${spell.image.full}`}
							height={48}
							width={48}
							alt=""
						/>
						<span className="relative -top-2 border border-champBorder rounded-sm bg-champBG px-1 text-sm">
							{spell.id.charAt(spell.id.length - 1)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
