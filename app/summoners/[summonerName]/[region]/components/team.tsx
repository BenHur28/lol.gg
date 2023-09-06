import { cn } from "@/lib/utils";
import Image from "next/image";

type TeamProps = {
	playerlist: string[];
	championlist: string[];
	name: string;
};

const Team = ({ playerlist, championlist, name }: TeamProps) => {
	return (
		<>
			<div className="mr-1">
				{championlist.map((champ: string) => (
					<div className="mb-1 " key={champ}>
						<Image
							height={16}
							width={16}
							src={`https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champ}.png`}
							alt=""
						/>
					</div>
				))}
			</div>
			<div>
				{playerlist.map((player: string, index: number) => (
					<p
						className={cn(
							"text-xs text-[#cddcfe] whitespace-nowrap mb-1",
							player == name ? "font-bold text-white" : ""
						)}
						key={index}
					>
						{player}
					</p>
				))}
			</div>
		</>
	);
};

export default Team;
