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
	const ranked_data = data[0].filter(
		(d: { queueType: string }) => d.queueType == "RANKED_SOLO_5x5"
	);
	const normal_data = data[0].filter(
		(d: { queueType: string }) => d.queueType == "CHERRY"
	);
	console.log(data);
	console.log(ranked_data);
	return (
		<div className="pt-40 mb-10 text-white">
			<div className="flex flex-col items-center">
				<div className="flex w-1/2">
					<Image
						className="border border-itemBorder"
						height={100}
						width={100}
						src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/${data[1]}.png`}
						alt=""
					/>
					<div className="flex flex-col ml-4 justify-between">
						<h1 className=" text-3xl font-semibold">{summonerName}</h1>
						<Button className="bg-blue-500">Update</Button>
					</div>
				</div>
			</div>
			<div className="mx-auto w-1/2 grid grid-cols-3 gap-4 mt-20">
				<div className="col-span-1  ">
					<div className="bg-matchHistory rounded-md px-4 py-2">
						<h2 className="text-md font-semibold">Ranked Solo</h2>
						<div className="flex justify-between mt-2">
							<div className="flex flex-col">
								<p className="text-xl font-bold">Diamond 2</p>
								<span>99 LP</span>
							</div>
							<div className="flex flex-col">
								<span className="text-end">5W 5L</span>
								<span>50% win rate</span>
							</div>
						</div>
					</div>
					<div className="bg-matchHistory rounded-md mt-4 px-4 py-2">
						<h2 className="text-md font-semibold">Ranked Flex</h2>
						<div className="flex justify-between mt-2">
							<div className="flex flex-col">
								<p className="text-xl font-bold">Diamond 2</p>
								<span>99 LP</span>
							</div>
							<div className="flex flex-col">
								<span className="text-end">5W 5L</span>
								<span>50% win rate</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-2 text-xl font-semibold p-4 bg-[#11112a] rounded-md">
					Match History
				</div>
			</div>
		</div>
	);
}
