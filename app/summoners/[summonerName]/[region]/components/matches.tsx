import { cn } from "@/lib/utils";

type MatchesProps = {
	matches: Game[];
	matchId: string;
};

const Matches = ({ matches, matchId }: MatchesProps) => {
	return (
		<>
			{matches.map((match: any, index: number) => (
				<div
					key={index}
					className={cn(
						"w-full mt-2 p-3 rounded-md",
						match.info.participants
							.filter((player: any) => player.puuid == matchId)
							.filter((p: any) => p.puuid == matchId)[0].win == true
							? "bg-[#22397c]"
							: "bg-[#53263e]"
					)}
				>
					<div className="flex w-full justify-end">
						<div>
							{match.team1playerlist.map((player: string, index: number) => (
								<p key={index}>{player}</p>
							))}
						</div>
						<div>
							{match.team2playerlist.map((player: string, index: number) => (
								<p key={index}>{player}</p>
							))}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Matches;
