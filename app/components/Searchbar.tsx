"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/champions/${search}`);
	};

	return (
		<div className="h-screen w-full">
			<div className="h-full flex flex-col items-center justify-center">
				<div className="flex">
					<h1 className="text-white text-8xl mb-10">LOL.GG</h1>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-row bg-white rounded-md py-4 px-2 md:w-1/3 justify-between"
				>
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="mx-4 w-full outline-none"
						placeholder="Search Summoner or a Champion"
					/>
					<button>🔍</button>
				</form>
			</div>
		</div>
	);
}
