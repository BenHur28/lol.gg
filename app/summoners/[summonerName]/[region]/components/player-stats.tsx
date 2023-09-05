import { cn } from "@/lib/utils";

type PlayerstatsProps = {
	player: any;
};

const Playerstats = ({ player }: PlayerstatsProps) => {
	const playerData = player[0];
	const kda = (
		(playerData.kills + playerData.assists) /
		playerData.deaths
	).toFixed(2);
	return (
		<div className="flex flex-col items-center">
			<div>
				<span className="text-sm">{playerData.kills} / </span>
				<span className="text-sm text-[#FF4E50]">{playerData.deaths}</span>
				<span className="text-sm"> / {playerData.assists}</span>
			</div>
			<div>
				<span
					className={cn(
						"text-xs",
						Number(kda) >= 5.0 ? "text-[#FF9B00]" : "text-white"
					)}
				>
					{kda}
				</span>{" "}
				<span className="text-xs text-[#cddcfe]">KDA</span>
			</div>
			<p className="text-xs text-[#cddcfe]">
				{playerData.totalMinionsKilled +
					playerData.totalEnemyJungleMinionsKilled}{" "}
				CS
			</p>
			<p className="text-xs text-[#cddcfe]">{playerData.visionScore} vision</p>
		</div>
	);
};

export default Playerstats;
