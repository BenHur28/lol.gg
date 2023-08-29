"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { regions, filters } from "@/lib/data";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Searchbar() {
	const [search, setSearch] = useState("");
	const [searchFilter, setSearchFilter] = useState("summoners");
	const [regionFilter, setRegionFilter] = useState("NA1");
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [regionValue, setRegionValue] = useState("NA");
	const [filterValue, setFilterValue] = useState("summoners");
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search !== "" && searchFilter === "summoners") {
			router.push(`/${searchFilter}/${search}/${regionFilter}`);
		} else if (search !== "") {
			router.push(`/${searchFilter}/${search}`);
		}
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
				<div className="flex min-[320px]:flex-col min-[1440px]:flex-row gap-y-4 mt-4 md:w-1/3 justify-between items-center">
					<Popover open={open1} onOpenChange={setOpen1}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open2}
								className="w-[200px] justify-between"
							>
								{filterValue}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandGroup>
									{filters.map((filter) => (
										<CommandItem
											key={filter.value}
											onSelect={(currentValue) => {
												setFilterValue(
													currentValue === filterValue ? "" : currentValue
												);
												setOpen1(false);
												setSearchFilter(filter.value);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													filterValue === filter.value
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{filter.label}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
					<Popover open={open2} onOpenChange={setOpen2}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open2}
								className="w-[200px] justify-between"
							>
								{regionValue.toUpperCase()}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandGroup>
									{regions.map((region) => (
										<CommandItem
											key={region.value}
											onSelect={(currentValue) => {
												setRegionValue(
													currentValue === regionValue ? "" : currentValue
												);
												setOpen2(false);
												setRegionFilter(region.value);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													regionValue === region.value
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{region.label}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
}
