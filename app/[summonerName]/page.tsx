import getSummoner from "@/services/getSummoner";

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
	console.log(data);
	return <div className="pt-32 pl-40 mb-10 text-white">page</div>;
}
