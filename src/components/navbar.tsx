"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui";

export function NavBar() {
	const router = useRouter();
	const pathname = usePathname();
	const inActive =
		"hover:bg-indigo-600 hover:font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-3 rounded-sm hover:cursor-pointer ";
	const active =
		"border border-indigo-600 font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-4 rounded-sm hover:cursor-pointer";
	return (
		<div className="w-full py-6 bg-background">
			<nav className="flex items-center mx-auto justify-between max-w-[1280px]">
				<div className="flex font-bold text-2xl">
					Rice
					<span className="text-indigo-600">Sentry</span>
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
					<Button
						onClick={() => router.push("/signin")}
						className="px-8 bg-indigo-600 hover:cursor-pointer text-white"
					>
						Sign In
					</Button>
					<ModeToggle />
				</div>
			</nav>
		</div>
	);
}
