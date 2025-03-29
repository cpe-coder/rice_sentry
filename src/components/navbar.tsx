"use client";

import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavItems } from "./nav-items";

export function NavBar() {
	const router = useRouter();

	return (
		<div className="w-full py-6 bg-background">
			<nav className="flex items-center mx-auto justify-between max-w-[1280px] px-4 md:px-8 lg:px-8">
				<div className="flex font-bold text-2xl">
					Rice
					<span className="text-indigo-600">Sentry</span>
				</div>
				<NavItems navComponent="gap-0 hidden md:flex lg:flex lg:gap-2" />
				<div className="hidden md:flex lg:flex items-center gap-8">
					<Button
						onClick={() => router.push("/signin")}
						className="px-8 bg-indigo-600 hover:cursor-pointer text-white hover:bg-indigo-800 hover:transition-all hover:duration-300 transition-all duration-300"
					>
						Sign In
					</Button>
					<ModeToggle />
				</div>
				<div className="flex md:hidden lg:hidden items-center transition-all duration-300">
					<Sheet>
						<SheetTrigger className="hover:cursor-pointer">
							<Menu />
						</SheetTrigger>
						<SheetContent side="left" className="min-w-[300px]">
							<SheetHeader>
								<SheetTitle>
									<div className="flex font-bold text-2xl justify-between items-center">
										<h1>
											Rice
											<span className="text-indigo-600">Sentry</span>
										</h1>
										<ModeToggle />
									</div>
								</SheetTitle>
							</SheetHeader>
							<div className="justify-start items-start grid grid-cols-1 gap-2">
								<NavItems navComponent="grid grid-cols-1 p-4 gap-2" />
								<div className="px-4 py-8 w-full">
									<Button
										onClick={() => router.push("/signin")}
										className="px-8 w-full bg-indigo-600 hover:cursor-pointer text-white hover:bg-indigo-800 hover:transition-all hover:duration-300 transition-all duration-300"
									>
										Sign In
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</div>
	);
}
