import getSummoner from "@/services/getSummoner";

type Props = {
	params: {
		summonerName: string;
	};
};

export async function generateMetadata({ params: { summonerName } }: Props) {
	return {
		title: `${summonerName} Information`,
		description: `Summoner page for ${summonerName}`,
	};
}

export default async function page({ params: { summonerName } }: Props) {
	const summoner = getSummoner(summonerName);
	const data = await summoner;
	console.log(data);
	return <div className="pt-32 pl-40 mb-10 text-white">page</div>;
}
