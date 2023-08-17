import getSummoner from "@/services/getSummoner";
import Image from "next/image";

type Props = {
	params: {
		summonerName: string;
	};
};

export async function generateMetadata({ params: { summonerName } }: Props) {
	const name = summonerName.charAt(0).toUpperCase() + summonerName.slice(1);
	return {
		title: `${name}'s Stats`,
		description: `Summoner page for ${name}`,
	};
}

export default async function page({ params: { summonerName } }: Props) {
	const summoner = getSummoner(summonerName);
	const data = await summoner;
	const winLossPercent = (data.wins / (data.wins + data.losses)) * 100;
	console.log(data);
	return (
		<div className="pt-32 mb-10 text-white">
			<div className="flex flex-col items-center">
				<h1>{summonerName}</h1>
				<Image
					className="border border-champBorder"
					height={100}
					width={100}
					src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/${data.profileIconId}.png`}
					alt=""
				/>
				<p>
					{data.tier} {data.rank}
				</p>
				<p>
					Wins: {data.wins} Loses: {data.losses}
				</p>
				<p>{Math.round(winLossPercent)}% Win Rate</p>
			</div>
		</div>
	);
}
