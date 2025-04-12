import Image from "next/image";

import { diseases } from "@/constant/data";

export default function Diseases() {
	return (
		<div className="flex flex-col items-center w-full">
			<title>RiceSentry • Diseases</title>
			{diseases.map((disease, index) => (
				<div
					key={index}
					className="mx-auto max-w-[1280px] px-0 md:px-8 lg:px-8 flex items-center justify-between py-10 md:py-16 lg:py-20 font-mono"
				>
					{disease.position === "left" && (
						<Image
							src={disease.position === "left" ? disease.image : ""}
							alt="Army Worm"
							className="lg:h-[500px] ml-4 md:ml-0 lg:ml-0 lg:w-[500px] md:w-[300px] md:h-[300px] shadow-2xl rounded-tl-full shadow-gray-500 w-[200px] h-[200px] rounded-tr-full rounded-br-full"
						/>
					)}
					<div className="flex flex-col px-4 md:px-0 lg:px-0 gap-5 md:gap-12 lg:gap-16 text-wrap">
						<h1
							className={`font-bold text-xl md:text-3xl lg:text-5xl   ${
								disease.position === "left" ? "text-right" : "text-left"
							} `}
						>
							{disease.name}
						</h1>
						<p
							className={`text-wrap text-xs md:text-base lg:text-lg  ${
								disease.position === "left" ? "text-right" : "text-left"
							}`}
						>
							{disease.description}
						</p>
					</div>
					{disease.position === "right" && (
						<Image
							src={disease.position === "right" ? disease.image : ""}
							alt="Bacterial Leaf Blight"
							className="lg:h-[500px] mr-4 md:mr-0 lg:mr-0 lg:w-[500px] md:w-[300px] md:h-[300px] shadow-2xl rounded-br-full  shadow-gray-500 w-[200px] h-[200px] rounded-tl-full rounded-bl-full"
						/>
					)}
				</div>
			))}
		</div>
	);
}
