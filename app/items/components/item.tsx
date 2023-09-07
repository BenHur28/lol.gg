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
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						{" "}
						<Link key={item.name} href={`/items/${item.name}`}>
							<Image
								className="border border-itemBorder rounded-sm"
								height={36}
								width={36}
								src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${item.image.full}`}
								alt=""
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</>
	);
};

export default Item;
