import getSummoner from "@/services/getSummoner";

export default async function page() {
	const summoner = getSummoner("Doublelift");
	const data = await summoner;
	console.log(data);
	return <div className="pt-32 pl-40 mb-10 text-white">page</div>;
}
