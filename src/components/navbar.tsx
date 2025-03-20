import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui";

export function NavBar() {
	// const active = ""
	return (
		<div className="w-full py-6 bg fixed bg-background">
			<nav className="flex px-8 items-center mx-auto justify-between">
				<div className="flex gap-2 font-bold text-2xl">
					<span>Rice</span>
					<span className="text-[#7241FF]">Sentry</span>
				</div>
				<div className="flex">
					<Link
						className="hover:bg-[#7241FF] font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-4 rounded-sm"
						href="/"
					>
						Home
					</Link>
					<Link
						className="py-1 px-4 rounded-sm font-medium hover:bg-[#7241FF] hover:transition-all hover:duration-500 transition-all duration-300"
						href="/about"
					>
						About
					</Link>
					<Link
						className="py-1 px-4 rounded-sm font-medium hover:bg-[#7241FF] hover:transition-all hover:duration-500 transition-all duration-300"
						href="/detect"
					>
						Detect
					</Link>
					<Link
						className="py-1 px-4 rounded-sm font-medium hover:bg-[#7241FF] hover:transition-all hover:duration-500 transition-all duration-300"
						href="/diseases"
					>
						Diseases
					</Link>
					<Link
						className="py-1 px-4 rounded-sm font-medium hover:bg-[#7241FF] hover:transition-all hover:duration-500 transition-all duration-300"
						href="/team"
					>
						Team
					</Link>
				</div>
				<div className="flex items-center gap-8">
					<Button className="px-8 bg-[#7241FF] dark:text-foreground ">
						Sign In
					</Button>
					<ModeToggle />
				</div>
			</nav>
		</div>
	);
}
