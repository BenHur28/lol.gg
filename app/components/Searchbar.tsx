"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
	const [search, setSearch] = useState("");
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const router = useRouter();
	const regions = [
		"NA",
		"EUW",
		"EUW",
		"KR",
		"BR",
		"JP",
		"RU",
		"OCE",
		"TR",
		"LAN",
		"LAS",
		"PH",
		"SG",
		"TH",
		"TW",
		"VN",
	];

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search !== "") {
			router.push(`/champions/${search}`);
		}
	};

	const handleOpen1 = () => {
		setOpen1(!open1);
	};

	const handleOpen2 = () => {
		setOpen2(!open2);
	};

	return (
		<div className="h-screen w-full">
			<div className="h-full flex flex-col items-center min-[1024px]:justify-center">
				<div className="flex max-[1024px]:mt-32">
					<h1 className="text-white text-8xl mb-10">LOL.GG</h1>
				</div>
				<div className="flex md:w-2/5">
					<div className="relative top-4 left-16 z-10 text-black">
						<button onClick={handleOpen1}>Search</button>
						{open1 ? (
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
						className="flex flex-row w-full bg-white rounded-md py-4 px-2 justify-between"
					>
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="mx-4 pl-20 w-full outline-none"
							placeholder="Search Summoner or a Champion"
						/>
						<button>🔍</button>
					</form>
					<div className="relative top-4 right-24 z-10 text-black">
						<button onClick={handleOpen2}>Region</button>
						{open2 ? (
							<ul className="">
								{regions.map((region) => (
									<li>
										<button>{region}</button>
									</li>
								))}
							</ul>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
