import { cn } from "@/lib/utils";
import Team from "./team";
import Gameinfo from "./gameinfo";
import Playerstats from "./player-stats";
import Playeritems from "./player-items";

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
					<div className="flex w-full items-center justify-between space-x-2 ">
						<Gameinfo
							game={match}
							puuid={puuid}
							player={match.info.participants.filter(
								(player: any) => player.puuid == puuid
							)}
						/>
						<Playerstats
							player={match.info.participants.filter(
								(player: any) => player.puuid == puuid
							)}
						/>
						<Playeritems
							player={match.info.participants.filter(
								(player: any) => player.puuid == puuid
							)}
						/>
						<div className="flex text-left items-center shrink-0 max-[583px]:hidden">
							<Team
								name={name}
								playerlist={match.team1.team1playerlist}
								championlist={match.team1.team1championlist}
							/>
						</div>
						<div className="flex text-left items-center shrink-0 max-[583px]:hidden">
							<Team
								name={name}
								playerlist={match.team2.team2playerlist}
								championlist={match.team2.team2championlist}
							/>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Matches;
