"use client";

import { usePathname } from "next/navigation";
import NavSearchBar from "./Nav-search-bar";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className="fixed z-10 w-full bg-nav h-20 border-b border-b-border">
			<div
				className={cn(
					"h-full flex mx-auto text-white items-center",
					pathname == "/" ? "hidden" : ""
				)}
			>
				<NavSearchBar />
			</div>
		</nav>
	);
}
