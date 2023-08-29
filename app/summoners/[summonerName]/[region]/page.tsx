import { Button } from "@/components/ui/button";
import getSummoner from "@/services/getSummoner";
import Image from "next/image";

type Props = {
	params: {
		summonerName: string;
		region: string;
	};
};

export async function generateMetadata({ params: { summonerName } }: Props) {
	const name = summonerName.charAt(0).toUpperCase() + summonerName.slice(1);
	return {
		title: `${name}'s Stats`,
		description: `Summoner page for ${name}`,
	};
}

export default async function page({
	params: { summonerName, region },
}: Props) {
	const summoner = getSummoner(summonerName, region);
	const data = await summoner;
	console.log("Data when it gets to client:");
	console.log(data);
	const winLossPercent = (data?.wins / (data?.wins + data?.losses)) * 100;
	return (
		<div className="pt-40 mb-10 text-white">
			<div className="flex flex-col items-center">
				<div className="flex w-1/2">
					<Image
						className="border border-champBorder"
						height={100}
						width={100}
						src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/${data?.profileIconId}.png`}
						alt=""
					/>
					<div className="flex flex-col ml-4 justify-between">
						<h1 className=" text-3xl font-semibold">{summonerName}</h1>
						<Button className="bg-blue-500">Update</Button>
					</div>
				</div>
			</div>
			<div className="mx-auto w-1/2 grid grid-cols-3 mt-20">
				<div className="col-span-1">Ranked Solo</div>
				<div className="col-span-2">Match History</div>
			</div>
		</div>
	);
}
