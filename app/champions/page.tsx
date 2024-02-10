import getChampionsData from "@/services/getChampions";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
	return {
		title: "Champion list",
		description: "Browse all champions.",
	};
}

export default async function ChampionsPage() {
	const championData = getChampionsData();
	const res = await championData;
	const champs: Champion[] = [];
	for (let champ in res.data) {
		champs.push(res.data[champ]);
	}
	return (
		<div data-testid="championspage-div" className="flex flex-col items-center">
			<div>
				<div className="mt-32 mb-10">
					<h1 className="text-white text-4xl font-bold mb-2">Champions List</h1>
					<h2 className="text-champH2 text-xl font-bold">
						Discover best builds for every champion
					</h2>
				</div>
				<div className="flex justify-center p-10 border border-champBorder bg-champBG">
					<ul className="grid min-[320px]:grid-cols-3 min-[375px]:grid-cols-4 min-[768px]:grid-cols-5 min-[1024px]:grid-cols-5 min-[1440px]:grid-cols-8 gap-4">
						{champs.map((champ) => (
							<li key={champ.id}>
								<Link
									href={`/champions/${champ.name}`}
									className="flex flex-col"
								>
									<Image
										className="border border-champBorder"
										height={96}
										width={96}
										src={`http://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champ.image.full}`}
										alt=""
									></Image>
									<span className="text-white text-sm mt-2 break-words">
										{champ.name}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
