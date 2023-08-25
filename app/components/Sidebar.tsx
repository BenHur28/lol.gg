"use client";

import { useState } from "react";
import { GiBroadsword } from "react-icons/gi";
import { RiSkullLine } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
			className={`z-20 h-full relative hidden md:flex md:flex-col md:fixed transition-all duration-300 bg-side ${
				isExpanded ? "hover:w-60 z-0 " : "md:w-20 delay-150"
			}`}
		>
			<div className="flex items-center">
				<Link href="/" className="flex items-center">
					<Image
						className="m-5"
						width={40}
						height={40}
						src="/icon.png"
						alt=""
					/>
					<span
						className={`text-sideItem text-2xl font-bold duration-300 ${
							!isExpanded && "opacity-0"
						}`}
					>
						{" "}
						LOL.GG
					</span>
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
								className={`text-sideItem text-base font-bold ml-8 duration-300 ${
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
