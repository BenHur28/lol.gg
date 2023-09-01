import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import getMatchHistory from "@/services/getMatchHistory";
import getSummoner from "@/services/getSummoner";
import Image from "next/image";
import { ranks } from "@/lib/data";

type Props = {
	params: {
		summonerName: string;
		region: string;
	};
};

export async function generateMetadata({ params: { summonerName } }: Props) {
	const name = summonerName.charAt(0).toUpperCase() + summonerName.slice(1);
	return {
		title: `${name.replace(/%20/g, " ")}'s Stats`,
		description: `Summoner page for ${name}`,
	};
}

export default async function page({
	params: { summonerName, region },
}: Props) {
	const location = "";
	const summoner = getSummoner(summonerName, region);
	const matchHistory = getMatchHistory(summonerName, region);
	const data = await summoner;
	const matches = await matchHistory;
	const ranked_data = data[0].filter(
		(d: { queueType: string }) => d.queueType == "RANKED_SOLO_5x5"
	);
	const ranked_flex_data = data[0].filter(
		(d: { queueType: string }) => d.queueType == "RANKED_FLEX_SR"
	);
	const normal_data = data[0].filter(
		(d: { queueType: string }) => d.queueType == "CHERRY"
	);
	const rank =
		ranked_data.length > 0
			? ranks.filter((rank) => rank.label == ranked_data[0].tier)[0].value
			: "";
	const flex_rank =
		ranked_flex_data.length > 0
			? ranks.filter((rank) => rank.label == ranked_flex_data[0].tier)[0].value
			: "";
	console.log(ranked_flex_data);
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
						<h1 className=" text-3xl font-semibold">
							{summonerName.replace(/%20/g, " ")}
						</h1>
						<Button className="bg-blue-500">Update</Button>
					</div>
				</div>
			</div>
			<div className="mx-auto w-1/2 grid grid-cols-3 gap-4 mt-20">
				<div className="col-span-1  ">
					<div className="bg-matchHistory rounded-md px-4 py-2">
						{ranked_data.length == 0 && (
							<div className="flex justify-between items-center">
								<h2 className="text-md font-semibold">Ranked Solo</h2>
								<span className="text-[#cddcfe] text-sm">Unranked</span>
							</div>
						)}
						{ranked_data.length > 0 && (
							<>
								<h2 className="text-md font-semibold">Ranked Solo</h2>
								<div className="flex justify-between mt-2">
									{rank && (
										<Image src={rank} alt="" height={40} width={40}></Image>
									)}
									<div className="flex flex-col">
										<p className="text-xl font-bold">
											{ranked_data[0].tier} {ranked_data[0].rank}
										</p>
										<span className="text-[#cddcfe] text-sm">
											{ranked_data[0].leaguePoints} LP
										</span>
									</div>
									<div className="flex flex-col justify-end">
										<span className="text-end text-[#cddcfe] text-sm">
											{ranked_data[0].wins}W {ranked_data[0].losses}L
										</span>
										<span className="text-end text-[#cddcfe] text-sm">
											{Math.round(
												(ranked_data[0].wins /
													(ranked_data[0].wins + ranked_data[0].losses)) *
													100
											)}
											% Win Rate
										</span>
									</div>
								</div>
							</>
						)}
					</div>
					<div className="bg-matchHistory rounded-md mt-4 px-4 py-2">
						{ranked_flex_data.length == 0 && (
							<div className="flex justify-between items-center">
								<h2 className="text-md font-semibold">Ranked Flex</h2>
								<span className="text-[#cddcfe] text-sm">Unranked</span>
							</div>
						)}
						{ranked_flex_data.length > 0 && (
							<>
								<h2 className="text-md font-semibold">Ranked Flex</h2>
								<div className="flex justify-between mt-2">
									{flex_rank && (
										<Image
											src={flex_rank}
											alt=""
											height={40}
											width={40}
										></Image>
									)}
									<div className="flex flex-col">
										<p className="text-xl font-bold">
											{ranked_flex_data[0].tier} {ranked_flex_data[0].rank}
										</p>

										<span className="text-[#cddcfe] text-sm">
											{ranked_flex_data[0].leaguePoints} LP
										</span>
									</div>
									<div className="flex flex-col justify-end">
										<span className="text-end text-[#cddcfe] text-sm">
											{ranked_flex_data[0].wins}W {ranked_flex_data[0].losses}L
										</span>
										<span className="text-end text-[#cddcfe] text-sm">
											{Math.round(
												(ranked_flex_data[0].wins /
													(ranked_flex_data[0].wins +
														ranked_flex_data[0].losses)) *
													100
											)}
											% Win Rate
										</span>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="col-span-2 text-xl font-semibold p-4 bg-[#11112a] rounded-md">
					{matches.map((match: any, index: number) => (
						<div
							key={index}
							className={cn(
								"w-full mt-2 p-3 rounded-md",
								match.info.participants
									.filter((player: any) => player.puuid == data[2])
									.filter((p: any) => p.puuid == data[2])[0].win == true
									? "bg-[#22397c]"
									: "bg-[#53263e]"
							)}
						>
							{match.metadata.matchId}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
