import getChampionsData from "@/services/getChampions";
import Link from "next/link";

export default async function ChampionsPage() {
	const championData = getChampionsData();
	const res = await championData;
	const champs: Champion[] = [];
	for (let champ in res.data) {
		champs.push(res.data[champ]);
	}
	return (
		<div className="flex justify-center">
			<ul className="grid grid-cols-8 gap-4">
				{champs.map((champ) => (
					<li key={champ.id}>
						<Link href={`/champions/${champ.name.toLowerCase()}`}>
							<img
								className="h-24 w-24"
								src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champ.image.full}`}
								alt=""
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
