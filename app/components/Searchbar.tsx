export default function Searchbar() {
	return (
		<div className="h-screen w-full">
			<div className="h-full flex flex-col items-center justify-center">
				<form className="flex flex-row bg-white rounded-md py-4 px-2 md:w-1/3 justify-between">
					<input
						type="text"
						className="mx-4 w-full outline-none"
						placeholder="Search Summoner or a Champion"
					/>
					<button>🔍</button>
				</form>
			</div>
		</div>
	);
}
