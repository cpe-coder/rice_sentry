import Link from "next/link";

export function NavBar() {
	// const active =
	return (
		<div className="w-full py-6 bg-transparent backdrop-blur-md fixed mb-28">
			<nav className="flex px-8 items-center mx-auto justify-between">
				<div className="flex gap-2 font-bold text-2xl">
					<span>Rice</span>
					<span className="text-[#7241FF]">Sentry</span>
				</div>
				<div className="flex gap-7">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/detect">Detect</Link>
					<Link href="/diseases">Diseases</Link>
					<Link href="/team">Team</Link>
				</div>
				<div>hello</div>
			</nav>
		</div>
	);
}
