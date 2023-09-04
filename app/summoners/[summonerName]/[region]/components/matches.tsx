import { cn } from "@/lib/utils";
import Image from "next/image";

type MatchesProps = {
	matches: Game[];
	puuid: string;
	name: string;
};

const Matches = ({ matches, puuid, name }: MatchesProps) => {
	return (
		<>
			{matches.map((match: any, index: number) => (
				<div
					key={index}
					className={cn(
						"w-full mt-2 p-3 pt-4 rounded-md",
						match.info.participants
							.filter((player: any) => player.puuid == puuid)
							.filter((p: any) => p.puuid == puuid)[0].win == true
							? "bg-[#22397c]"
							: "bg-[#53263e]"
					)}
				>
					<div className="flex w-full justify-end space-x-2">
						<div className="">{}</div>
						<div className="flex w-1/5 text-left items-center">
							<div className="mr-1">
								{match.team1.team1championlist.map((champ: string) => (
									<p className="mb-1" key={champ}>
										<Image
											height={16}
											width={16}
											src={`https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champ}.png`}
											alt=""
										/>
									</p>
								))}
							</div>
							<div>
								{match.team1.team1playerlist.map(
									(player: string, index: number) => (
										<p
											className={cn(
												"text-xs text-[#cddcfe] whitespace-nowrap mb-1",
												player == name ? "font-bold text-white" : ""
											)}
											key={index}
										>
											{player}
										</p>
									)
								)}
							</div>
						</div>
						<div className="flex w-1/5 text-left items-center">
							<div className="mr-1">
								{match.team2.team2championlist.map((champ: string) => (
									<p className="mb-1" key={champ}>
										<Image
											height={16}
											width={16}
											src={`https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champ}.png`}
											alt=""
										/>
									</p>
								))}
							</div>
							<div>
								{match.team2.team2playerlist.map(
									(player: string, index: number) => (
										<p
											className={cn(
												"text-xs text-[#cddcfe] whitespace-nowrap mb-1",
												player == name ? "font-bold text-white" : ""
											)}
											key={index}
										>
											{player}
										</p>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Matches;
