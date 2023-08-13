"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
	const [search, setSearch] = useState("");
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search !== "") {
			router.push(`/champions/${search}`);
		}
	};

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="h-screen w-full">
			<div className="h-full flex flex-col items-center min-[1024px]:justify-center">
				<div className="flex max-[1024px]:mt-32">
					<h1 className="text-white text-8xl mb-10">LOL.GG</h1>
				</div>
				<div className="text-white">
					<button onClick={handleOpen}>click</button>
					{open ? (
						<ul className="">
							<li className="">
								<button>Summoners</button>
							</li>
							<li className="">
								<button>Champions</button>
							</li>
						</ul>
					) : null}
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
