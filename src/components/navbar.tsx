import Link from "next/link";

export function NavBar() {
	return (
		<div className="w-full py-6 bg-transparent backdrop-blur-md fixed mb-28">
			<nav className="flex px-8 items-center mx-auto justify-between">
				<div className="flex gap-2 font-bold text-2xl">
					<span>Rice</span>
					<span className="text-[#7241FF]">Sentry</span>
				</div>
				<div className="flex gap-3">
					<Link href={"/"}>Home</Link>
					<Link href={"/About"}>About</Link>
					<Link href={"/Detect"}>Detect</Link>
					<Link href={"/Diseases"}>Diseases</Link>
					<Link href={"/Team"}>Team</Link>
				</div>
				<div>hello</div>
			</nav>
		</div>
	);
}
