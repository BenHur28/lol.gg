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

const NavSearchBar = () => {
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
		<div className="flex items-center mx-auto text-black">
			<Popover open={open1} onOpenChange={setOpen1}>
				<PopoverTrigger asChild className="h-[32px] rounded-sm mr-2">
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open2}
						className="w-[150px] justify-between"
					>
						{filterValue}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[150px] p-0">
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
											filterValue === filter.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{filter.label}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
			<form
				onSubmit={handleSubmit}
				className="flex flex-row w-full bg-white rounded-sm py-1 px-1 justify-between"
			>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="mx-2 w-full outline-none"
					placeholder="Search Summoner or a Champion"
				/>
				<button>🔍</button>
			</form>
			<Popover open={open2} onOpenChange={setOpen2}>
				<PopoverTrigger asChild className="h-[32px] ml-2 rounded-sm">
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open2}
						className="w-[100px] justify-between"
					>
						{regionValue.toUpperCase()}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[100px] p-0">
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
											regionValue === region.value ? "opacity-100" : "opacity-0"
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
	);
};

export default NavSearchBar;
