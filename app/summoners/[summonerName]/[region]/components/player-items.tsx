import Image from "next/image";

type PlayeritemsProps = {
	player: any;
};

const Playeritems = ({ player }: PlayeritemsProps) => {
	const playerData = player[0];
	const items: string[] = [];
	const pushItems = () => {
		items.push(playerData.item0);
		items.push(playerData.item1);
		items.push(playerData.item2);
		items.push(playerData.item3);
		items.push(playerData.item4);
		items.push(playerData.item5);
	};
	pushItems();
	return (
		<div className="flex justify-center my-auto pb-8 shrink-0">
			<div className="grid grid-cols-3 h-0 gap-0.5">
				{items.map((item: string) =>
					item != "0" ? (
						<Image
							className=""
							key={item}
							height={22}
							width={22}
							src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${item}.png`}
							alt=""
						/>
					) : (
						<div
							key={item}
							className="h-22 w-22 bg-[#3273fa] shadow-md rounded-sm"
						></div>
					)
				)}
			</div>
			<Image
				className="ml-0.5"
				height={22}
				width={22}
				src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${playerData.item6}.png`}
				alt=""
			/>
		</div>
	);
};

export default Playeritems;
