import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/Ai";

export default function Navbar() {
	return (
		<nav className="fixed z-10 w-full bg-nav h-20 border-b border-b-border">
			<div className="h-full flex flex-row text-white justify-end items-center">
				<div className="flex flex-row gap-4 items-center">
					<button>
						<BsFillGearFill className="h-5 w-5" />
					</button>
					<button>
						<AiOutlineMail className="h-5 w-5" />
					</button>
					<button className="text-white text-sm bg-blue-500 rounded-sm px-6 py-2 mr-10">
						Log In
					</button>
				</div>
			</div>
		</nav>
	);
}
