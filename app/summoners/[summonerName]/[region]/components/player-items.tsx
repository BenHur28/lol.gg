import Image from "next/image";

type PlayeritemsProps = {
	player: any;
};

const Playeritems = ({ player }: PlayeritemsProps) => {
	const playerData = player[0];
	return (
		<div className="flex justify-center my-auto pb-8">
			<div className="grid grid-cols-3 h-0 gap-0.5">
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item0}.png`}
					alt=""
				/>
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item1}.png`}
					alt=""
				/>
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item2}.png`}
					alt=""
				/>
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item3}.png`}
					alt=""
				/>
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item4}.png`}
					alt=""
				/>
				<Image
					height={22}
					width={22}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item5}.png`}
					alt=""
				/>
			</div>
			<Image
				className="self-start ml-0.5"
				height={22}
				width={22}
				src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item6}.png`}
				alt=""
			/>
		</div>
	);
};

export default Playeritems;
