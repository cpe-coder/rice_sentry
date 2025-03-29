"use client";

import { Button } from "@/components/ui";
import { Rice } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<div className="bg-[url('/rice-background.jpg')] bg-bottom bg-no-repeat bg-fixed md:bg-cover lg:bg-cover items-center justify-center w-full min-h-screen">
			<div className="mx-auto py-20 px-4 md:px-8 lg:px-8 max-w-[1280px] w-full">
				<div className="grid grid-cols-1 justify-start items-center backdrop-blur-xs p-4 rounded-md border">
					<h3 className="font-medium text-base md:text-lg lg:text-lg mb-8 ">
						WELCOME TO
						<span className="font-extrabold underline p-2 text-indigo-800">
							RiceSentry
						</span>
					</h3>
					<div className="flex items-center gap-2">
						<h1 className=" text-5xl md:text-6xl lg:text-7xl flex font-mono font-bold">
							<span>Rice Pest and Disease</span>
							<Image
								src={Rice}
								alt="rice logo"
								className="rotate-[30deg] w-25 lg:block hidden "
							/>
						</h1>
					</div>
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold mb-10">
						Detection System
					</h1>
					<p className="text-wrap max-w-[800px] font-semibold text-base">
						Don&apos;t know what&apos;s harming your rice crops? No worries!
						RiceSentry helps you identify problems and keep your rice healthy
						for a better harvest.
					</p>
					<div className="mt-8">
						<Button
							onClick={() => router.push("/detect")}
							className="px-12 py-6 bg-indigo-600 hover:bg-indigo-800 hover:transition-all hover:duration-300 transition-all duration-300 text-white font-bold hover:cursor-pointer"
						>
							Proceed
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
