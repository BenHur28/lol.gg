"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SummonerProps = {
	name: string;
	image: string;
};

const Summoner = ({ name, image }: SummonerProps) => {
	const router = useRouter();
	const handleSubmit = () => {
		router.refresh();
	};

	return (
		<div className="flex min-[1167px]:w-1/2 min-[701px]:w-5/6 mx-auto justify-start">
			<div className="flex w-1/2">
				<Image
					className="border border-itemBorder"
					height={100}
					width={100}
					src={`http://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/${image}.png`}
					alt=""
				/>
				<div className="flex flex-col ml-4 justify-between">
					<h1 className=" text-3xl font-semibold">
						{name.replace(/%20/g, " ")}
					</h1>
					<Button onSubmit={handleSubmit} className="bg-blue-500">
						Update
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Summoner;
