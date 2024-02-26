import Image from "next/image";

type GameinfoProps = {
	game: Game;
	puuid: string;
	player: any;
};

const Gameinfo = ({ game, puuid, player }: GameinfoProps) => {
	const playerData = player[0];
	return (
		<div className="flex flex-col items-center">
			{game.queueId == 400 ? <p className="text-sm">Normal Draft</p> : ""}
			{game.queueId == 420 ? <p className="text-sm">Ranked Draft</p> : ""}
			<div className="flex mt-1 gap-0.5">
				<div className="relative">
					<Image
						height={42}
						width={42}
						src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${playerData.championName}.png`}
						alt=""
					/>
					<div className="absolute bottom-0 left-0 text-xs bg-black text-[10px] px-0.5 rounded-sm">
						{playerData.champLevel}
					</div>
				</div>
				<div className="flex flex-col gap-0.5">
					{/* // Place holder images until I can figure out dynamic icon from riot API */}
					<Image
						className="rounded-sm"
						height={19}
						width={19}
						src="/SummonerFlash.webp"
						alt=""
					/>
					<Image
						className="rounded-sm"
						height={19}
						width={19}
						src="/SummonerFlash.webp"
						alt=""
					/>
				</div>
			</div>
			<p>
				{game.info.participants
					.filter((player: any) => player.puuid == puuid)
					.filter((p: any) => p.puuid == puuid)[0].win == true ? (
					<span className="text-sm text-[#3273fa]">WIN </span>
				) : (
					<span className="text-sm text-[#ff4e50]">LOSE </span>
				)}
				<span className="text-sm text-[#cddcfe]">
					{""}
					{Math.round(game.info.gameDuration / 60)}
					{":"}
					{game.info.gameDuration % 60 < 10
						? "0" + (game.info.gameDuration % 60)
						: game.info.gameDuration % 60}{" "}
				</span>
			</p>
		</div>
	);
};

export default Gameinfo;
