import { Button } from "@/components/ui";
import { Rice } from "@/constant";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-[url('/rice-background.jpg')] bg-bottom bg-no-repeat bg-cover items-center justify-center h-screen p-8 w-full">
			<div className="grid grid-cols-1 max-w-[1280px] w-full justify-start items-center pt-12 backdrop-blur-xs p-8 rounded-md border">
				<h3 className="font-medium text-lg mb-8">
					WELCOME TO
					<span className="font-extrabold underline p-2 text-indigo-800">
						RICE SENTRY
					</span>
				</h3>
				<div className="flex items-center gap-2">
					<h1 className="text-7xl font-mono font-bold">
						Rice Pest and Disease
					</h1>
					<Image src={Rice} alt="rice logo" className="rotate-[30deg] w-24" />
				</div>
				<h1 className="text-7xl font-mono font-bold mb-10">Detection System</h1>
				<p className="text-wrap max-w-[800px] font-semibold text-base">
					Don&apos;t know what&apos;s harming your rice crops? No worries!
					RiceSentry helps you identify problems and keep your rice healthy for
					a better harvest.
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
