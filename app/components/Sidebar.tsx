"use client";

import { useState } from "react";
import { GiBroadsword } from "react-icons/gi";
import { RiSkullLine } from "react-icons/ri";
import { FaTrophy } from "react-icons/Fa";
import Link from "next/link";

export default function Sidebar() {
	const [isExpanded, setIsExpanded] = useState(false);

	const iconClasses = "text-sideItem h-6 w-6 ml-7 my-4 flex-shrink-0";
	const menuItems = [
		{
			title: "Items",
			icon: <GiBroadsword className={iconClasses} />,
		},
		{
			title: "Champions",
			icon: <RiSkullLine className={iconClasses} />,
		},
		{
			title: "Leaderboard",
			icon: <FaTrophy className={iconClasses} />,
		},
	];

	const onMouseEnter = () => {
		setIsExpanded(true);
	};

	const onMouseLeave = () => {
		setIsExpanded(false);
	};

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={`h-full relative hidden md:flex md:flex-col md:fixed transition-all duration-300 bg-side ${
				isExpanded ? "hover:w-60 z-0" : "md:w-20"
			}`}
		>
			<div className="flex items-center">
				<Link href="/">
					<img className="h-10 w-10 m-5" src="/icon.png" alt="" />
				</Link>
			</div>
			<div className="h-px mx-3 my-0 bg-divider"></div>
			<ul>
				{menuItems.map((item) => (
					<li key={item.title} className=" hover:bg-nav my-3 ">
						<Link
							className="flex items-center"
							href={`/${item.title.toLowerCase()}`}
						>
							<span>{item.icon}</span>
							<span
								className={`text-sideItem text-base font-bold ml-5 duration-300 ${
									!isExpanded && "opacity-0"
								}`}
							>
								{item.title}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
