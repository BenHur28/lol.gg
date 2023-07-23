"use client";

import { useState } from "react";
import { GiBroadsword } from "react-icons/gi";
import { RiSkullLine } from "react-icons/ri";

export default function Sidebar() {
	const [isExpanded, setIsExpanded] = useState(false);

	const iconClasses = "text-white h-10 w-10 m-5 flex-shrink-0";
	const menuItems = [
		{
			title: "Items",
			icon: <GiBroadsword className={iconClasses} />,
		},
		{
			title: "Champions",
			icon: <RiSkullLine className={iconClasses} />,
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
			className={`h-full relative hidden md:flex md:flex-col md:fixed transition-all duration-500 bg-gray-900 ${
				isExpanded ? "hover:w-60 z-0" : "md:w-20"
			}`}
		>
			<div className="flex items-center">
				<img className="h-10 w-10 m-5" src="/icon.png" alt="" />
			</div>
			<ul>
				{menuItems.map((item) => (
					<li key={item.title} className="flex items-center">
						{item.icon}
						<span
							className={`text-white text-xl ml-2 duration-500 ${
								!isExpanded && "opacity-0"
							}`}
						>
							{item.title}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
