type GameinfoProps = {
	game: Game;
	puuid: string;
};

const Gameinfo = ({ game, puuid }: GameinfoProps) => {
	return (
		<div className="flex flex-col items-center">
			{game.queueId == 400 ? <p className="text-sm">Normal Draft</p> : ""}
			{game.queueId == 420 ? <p className="text-sm">Ranked Draft</p> : ""}
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
