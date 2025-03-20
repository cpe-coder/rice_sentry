import { Button } from "@/components/ui";
import { Rice } from "@/constant";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex bg-[url('/rice-background.jpg')] bg-bottom bg-no-repeat bg-cover max-w-[2080px] items-center back justify-center h-screen w-full">
			<div className="bg-slate-400/50 h-screen w-full relative"></div>
			<div className="grid grid-cols-1 absolute max-w-[1280px] w-full justify-start items-center pt-12">
				<h3 className="font-medium text-lg mb-8">
					WELCOME TO
					<span className="font-extrabold underline p-2">RICE SENTRY</span>
				</h3>
				<div className="flex items-center gap-2">
					<h1 className="text-7xl font-mono font-medium">Rice Disease</h1>
					<Image src={Rice} alt="rice logo" className="rotate-[30deg] w-24" />
				</div>
				<h1 className="text-7xl font-mono font-medium mb-10">
					Detection System
				</h1>
				<p className="text-wrap max-w-[800px] font-semibold">
					Having problems with rice disease but don&apos;t know what disease it
					is? Don&apos;t worry, Rice Sentry got you covered with its Rice
					Disease Detection to help you maintain your rice healty to keep your
					income wealthy.
				</p>
				<div className="mt-8">
					<Button className="px-12 py-6 bg-indigo-600 text-white font-bold hover:cursor-pointer">
						Proceed
					</Button>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}
