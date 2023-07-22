import React from "react";

export default function Sidebar() {
	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
				<div className="text-white">Sidebar</div>
			</div>
			<main className="md:pl-72">SideBar items</main>
		</div>
	);
}
