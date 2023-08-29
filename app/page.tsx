import Searchbar from "./components/Searchbar";

export default function Home() {
	return (
		<div>
			<video
				className="h-full w-full fixed -z-10 object-fill opacity-0 min-[1024px]:opacity-30"
				muted={true}
				autoPlay={true}
				loop={true}
				src="/lol.mp4"
			></video>
			<Searchbar />
		</div>
	);
}
