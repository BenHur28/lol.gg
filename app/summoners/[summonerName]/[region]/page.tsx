import { ranks, matchRegion } from "@/lib/data";
import getMatchHistory from "@/services/getMatchHistory";
import getSummoner from "@/services/getSummoner";
import Summoner from "./components/summoner";
import RankedSolo from "./components/ranked-solo";
import RankedFlex from "./components/ranked-flex";
import Matches from "./components/matches";

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
	const location = matchRegion.filter((obj) => obj.label.includes(region))[0]
		.value;
	const summoner = getSummoner(summonerName, region);
	const matchHistory = getMatchHistory(summonerName, region, location);
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

	return (
		<div className="pt-40 mb-10 text-white break-words">
			<Summoner name={summonerName} image={data[1]}></Summoner>
			<div className="mx-auto gap-4 mt-10 min-[1167px]:w-1/2 min-[701px]:w-5/6 grid grid-cols-3 max-[1610px]:grid-cols-2">
				<div className="col-span-1">
					<RankedSolo data={ranked_data} rank={rank} />
				</div>
				<div className="col-span-1">
					<RankedFlex data={ranked_flex_data} rank={flex_rank} />
				</div>
				<div className="col-span-3 text-xl font-semibold px-4 pb-4 pt-2 bg-[#11112a] rounded-md">
					<Matches matches={matches} puuid={data[2]} name={summonerName} />
				</div>
			</div>
		</div>
	);
}
