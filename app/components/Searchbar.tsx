"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
	const [search, setSearch] = useState("");
	const [searchFilter, setSearchFilter] = useState("summoners");
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [region, setRegion] = useState("NA");
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
			router.push(`/${searchFilter}/${search}`);
		}
	};

	const handleOpen1 = () => {
		setOpen1(!open1);
	};

	const handleOpen2 = () => {
		setOpen2(!open2);
	};

	const handleSetSearch = (s: string) => {
		setSearchFilter(s);
		setOpen1(!open1);
	};
	const handleSetRegion = (r: string) => {
		setRegion(r);
		setOpen2(!open2);
	};

	return (
		<div className="h-screen w-full">
			<div className="h-full flex flex-col items-center min-[1024px]:justify-center">
				<div className="flex max-[1024px]:mt-32">
					<h1 className="text-white text-8xl mb-10">LOL.GG</h1>
				</div>
				<div className="flex items-center md:w-1/3">
					<form
						onSubmit={handleSubmit}
						className="flex flex-row w-full bg-white rounded-md py-4 px-2 justify-between"
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
				<div className="flex flex-row mt-4 md:w-1/3 justify-between">
					<div className=" text-black bg-red-200 px-10">
						<button onClick={handleOpen1}>{searchFilter}</button>
						{open1 ? (
							<ul className="">
								<li className="" onClick={() => handleSetSearch("champions")}>
									<button>champions</button>
								</li>
								<li className="" onClick={() => handleSetSearch("summoners")}>
									<button>summoners</button>
								</li>
							</ul>
						) : null}
					</div>
					<div className="  text-black bg-yellow-400 px-10">
						<button onClick={handleOpen2}>{region}</button>
						{open2 ? (
							<ul className="">
								{regions.map((region) => (
									<li className="" onClick={() => handleSetRegion(region)}>
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
