import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
	item: any;
};

const Item = ({ item }: ItemProps) => {
	return (
		<>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>
						{" "}
						<Link key={item.name} href={`/items/${item.name}`}>
							<Image
								className="border border-itemBorder rounded-sm"
								height={36}
								width={36}
								src={`http://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/${item.image.full}`}
								alt=""
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent className="bg-nav border border-itemBorder w-96 h-60">
						<div className="flex flex-col h-full w-full justify-between items-start">
							<div className="text-[#3273fa]">{item.name}</div>
							<p className="text-white text-xs break-words">
								{item.description.replace(
									/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
									""
								)}
							</p>
							<div className="text-amber-500 text-xs ">
								{item.gold.total}({item.gold.sell})
							</div>
						</div>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</>
	);
};

export default Item;
