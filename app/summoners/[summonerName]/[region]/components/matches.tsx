import { cn } from "@/lib/utils";
import Image from "next/image";
import Team from "./team";

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
						<div className="flex flex-col items-center">
							{match.queueId == 400 ? (
								<p className="text-sm">Normal Draft</p>
							) : (
								""
							)}
							{match.queueId == 420 ? (
								<p className="text-sm">Ranked Draft</p>
							) : (
								""
							)}
							<p>
								{match.info.participants
									.filter((player: any) => player.puuid == puuid)
									.filter((p: any) => p.puuid == puuid)[0].win == true ? (
									<span className="text-sm text-[#3273fa]">WIN </span>
								) : (
									<span className="text-sm text-[#ff4e50]">LOSE </span>
								)}
								<span className="text-sm text-[#cddcfe]">
									{""}
									{Math.round(match.info.gameDuration / 60)}
									{":"}
									{match.info.gameDuration % 60 < 10
										? "0" + (match.info.gameDuration % 60)
										: match.info.gameDuration % 60}{" "}
								</span>
							</p>
						</div>
						<div className="flex w-1/5 text-left items-center">
							<Team
								name={name}
								playerlist={match.team1.team1playerlist}
								championlist={match.team1.team1championlist}
							/>
						</div>
						<div className="flex w-1/5 text-left items-center">
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
