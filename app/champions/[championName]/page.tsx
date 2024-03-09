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
	const icons = ["Q", "W", "E", "R"];
	const championData = getChampionData(championName);
	const res = await championData;
	return (
		<div
			data-testid="single-champ-page"
			className="flex flex-col p-10 mx-auto min-[280px]:w-full max-[1024px]:w-5/6 lg:w-3/5 pt-32 mb-20"
		>
			<div className="flex flex-row w-full items-top">
				<Image
					className="border border-champBorder"
					height={100}
					width={100}
					src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${res.data[championName].image.full}`}
					alt=""
				/>
				<div className="ml-3 flex flex-col">
					<h1 className="text-white text-4xl">{res.data[championName].id}</h1>
					<h2 className="flex-wrap text-white w-full break-words">
						{res.data[championName].title}
					</h2>
					<span className="text-white break-words">
						{championName} is a
						{res.data[championName].tags.map((tag: string) => (
							<span key={championName}>{" " + tag + " "}</span>
						))}{" "}
						champion in League of Legends
					</span>
				</div>
			</div>
			<div className="mt-10 p-4 text-white flex flex-col w-full border border-champBorder bg-champBG justify-center items-center">
				<h1>{`${championName} Abilities Patch ${res.version}`}</h1>
				<div className="flex flex-row gap-2 w-full justify-center">
					<div className="flex flex-col items-center mt-4">
						<Image
							className="rounded-sm border border-itemBorder"
							src={`http://ddragon.leagueoflegends.com/cdn/14.5.1/img/passive/${res.data[championName].passive.image.full}`}
							height={48}
							width={48}
							alt=""
						/>
						<span className="relative -top-2 border border-champBorder rounded-sm bg-champBG px-1 text-sm">
							P
						</span>
					</div>

					{res.data[championName].spells.map((spell: any, index: number) => (
						<div key={spell.id} className="flex flex-col items-center mt-4">
							<Image
								className="rounded-sm border border-itemBorder"
								src={`http://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spell.image.full}`}
								height={48}
								width={48}
								alt=""
							/>
							<span className="relative -top-2 border border-champBorder rounded-sm bg-champBG px-1 text-sm">
								{icons[index]}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="p-8 w-full border-l border-r border-b border-champBorder bg-champBG">
				<div className="flex flex-row">
					<Image
						className="rounded-sm border border-itemBorder"
						src={`http://ddragon.leagueoflegends.com/cdn/14.5.1/img/passive/${res.data[championName].passive.image.full}`}
						height={60}
						width={60}
						alt=""
					/>
					<div className="flex flex-col ml-4 text-white text-xl w-full break-words">
						<h2>{res.data[championName].passive.name}</h2>
					</div>
					<div className="whitespace-nowrap text-white text-xl max-[691px]:hidden break-words">
						<h2>{`${championName}'s Passive`}</h2>
					</div>
				</div>
				<div className="mt-10 text-white">
					{res.data[championName].passive.description.replace(
						/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
						""
					)}
				</div>
			</div>
			{res.data[championName].spells.map((spell: any, index: number) => (
				<div
					key={spell.id}
					className="p-8 w-full border-l border-r border-b border-champBorder bg-champBG"
				>
					<div className="flex flex-row">
						<Image
							className="rounded-sm border border-itemBorder"
							src={`http://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spell.image.full}`}
							height={60}
							width={60}
							alt=""
						/>
						<div className="flex flex-col ml-4 text-white text-xl w-full break-words">
							<h2>{spell.name}</h2>
						</div>
						<div className="whitespace-nowrap text-white text-xl max-[691px]:hidden break-words">
							<h2>{`${championName}'s ${icons[index]}`}</h2>
						</div>
					</div>
					<div className="mt-10 text-white break-words">
						<h2>
							{spell.description.replace(
								/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
								""
							)}
						</h2>
						<p>
							{spell.tooltip.replace(
								/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
								""
							)}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
