"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui";

export function NavBar() {
	const pathname = usePathname();
	const inActive =
		"hover:bg-[#7241FF] hover:font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-3 rounded-sm ";
	const active =
		"border border-[#7241FF] font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-4 rounded-sm";
	return (
		<div className="w-full py-6 z-[2000] fixed bg-background">
			<nav className="flex items-center mx-auto justify-between max-w-[1280px]">
				<div className="flex gap-2 font-bold text-2xl">
					<span>Rice</span>
					<span className="text-[#7241FF]">Sentry</span>
				</div>
				<div className="flex gap-2">
					<Link className={pathname == "/" ? active : inActive} href="/">
						Home
					</Link>
					<Link
						className={pathname == "/about" ? active : inActive}
						href="/about"
					>
						About
					</Link>
					<Link
						className={pathname == "/detect" ? active : inActive}
						href="/detect"
					>
						Detect
					</Link>
					<Link
						className={pathname == "/diseases" ? active : inActive}
						href="/diseases"
					>
						Diseases
					</Link>
					<Link
						className={pathname == "/team" ? active : inActive}
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
