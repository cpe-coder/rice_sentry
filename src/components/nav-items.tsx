import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemsProps = {
	navComponent: React.ReactNode;
};

export const NavItems: React.FC<NavItemsProps> = ({ navComponent }) => {
	const pathname = usePathname();
	const inActive =
		"hover:bg-indigo-600 hover:font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-3 rounded-sm hover:cursor-pointer ";
	const active =
		"border border-indigo-600 font-medium hover:transition-all hover:duration-500 transition-all duration-300 py-1 px-4 rounded-sm hover:cursor-pointer";
	return (
		<div className={`${navComponent}`}>
			<Link className={pathname == "/" ? active : inActive} href="/">
				Home
			</Link>
			<Link className={pathname == "/about" ? active : inActive} href="/about">
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
				className={pathname == "/feedback" ? active : inActive}
				href="/feedback"
			>
				Feedback
			</Link>
		</div>
	);
};
