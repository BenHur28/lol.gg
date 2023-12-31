import Image from "next/image";

type RankedFlexProps = {
	rank: string;
	data: any[];
};

const RankedFlex = ({ data, rank }: RankedFlexProps) => {
	return (
		<div className="bg-matchHistory rounded-md px-4 py-2">
			{data.length == 0 && (
				<div className="flex justify-between items-center">
					<h2 className="text-md font-semibold">Ranked Flex</h2>
					<span className="text-[#cddcfe] text-sm">Unranked</span>
				</div>
			)}
			{data.length > 0 && (
				<>
					<h2 className="text-md font-semibold">Ranked Flex</h2>
					<div className="flex max-[571px]:flex-col justify-between mt-2">
						{rank && <Image src={rank} alt="" height={40} width={40}></Image>}
						<div className="flex flex-col">
							<p className="text-xl font-bold">
								{data[0].tier} {data[0].rank}
							</p>

							<span className="text-[#cddcfe] text-sm">
								{data[0].leaguePoints} LP
							</span>
						</div>
						<div className="flex flex-col justify-end">
							<span className="min-[572px]:text-end text-[#cddcfe] text-sm">
								{data[0].wins}W {data[0].losses}L
							</span>
							<span className="min-[572px]:text-end text-[#cddcfe] text-sm whitespace-nowrap">
								{Math.round(
									(data[0].wins / (data[0].wins + data[0].losses)) * 100
								)}
								% Win Rate
							</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default RankedFlex;
