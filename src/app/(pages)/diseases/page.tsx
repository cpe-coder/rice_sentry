import ArmyWorm from "@/assets/diseases/Armyworm.jpg";
import BacterialLeaf from "@/assets/diseases/Bacterial Leaf Blight.jpg";
import BPH from "@/assets/diseases/BPH.jpg";
import CaseWorm from "@/assets/diseases/Caseworm.jpg";
import FalseSmut from "@/assets/diseases/False Smut.png";
import Image from "next/image";

export default function Diseases() {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="mx-auto max-w-[1280px] px-8 flex items-center justify-between py-20 font-mono">
				<Image
					src={ArmyWorm}
					alt="Army Worm"
					className="h-[500px] w-[500px] rounded-tr-full rounded-br-full"
				/>
				<div className="flex flex-col gap-12 text-wrap">
					<h1 className="font-bold text-5xl  text-right ">Armyworm</h1>
					<p className="text-wrap  text-right ">
						The armyworm is a worm that eats rice leaves fast. It is common
						during warm and wet seasons. It can damage rice fields quickly. The
						worms hide during the day and eat at night.
					</p>
				</div>
			</div>
			<div className="mx-auto max-w-[1280px] px-8 flex items-center justify-between py-20 font-mono">
				<div className="flex flex-col gap-12 text-wrap">
					<h1 className="font-bold text-5xl  text-left ">
						Bacterial Leaf Blight
					</h1>
					<p className="text-wrap  text-left ">
						Bacterial leaf blight is a disease that makes yellow and brown marks
						on rice leaves. It is common during heavy rains or too much water.
						The disease spreads fast in wet fields.
					</p>
				</div>
				<Image
					src={BacterialLeaf}
					alt="Bacterial Leaf Blight"
					className="h-[500px] w-[500px] rounded-tl-full rounded-bl-full"
				/>
			</div>
			<div className="mx-auto max-w-[1280px] px-8 flex items-center justify-between py-20 font-mono">
				<Image
					src={BPH}
					alt="Brown Planthopper (BPH)"
					className="h-[500px] w-[500px] rounded-tr-full rounded-br-full"
				/>
				<div className="flex flex-col gap-12 text-wrap">
					<h1 className="font-bold text-5xl  text-right ">
						Brown Planthopper (BPH)
					</h1>
					<p className="text-wrap  text-right ">
						The brown planthopper is a small brown insect that sucks juice from
						rice plants. It appears more during rainy times. The insect makes
						plants turn brown and die.
					</p>
				</div>
			</div>
			<div className="mx-auto max-w-[1280px] px-8 flex items-center justify-between py-20 font-mono">
				<div className="flex flex-col gap-12 text-wrap">
					<h1 className="font-bold text-5xl  text-left ">Caseworm</h1>
					<p className="text-wrap  text-left ">
						The caseworm is a small worm that makes a case from rice leaves. It
						stays inside the case and eats the leaves. It is common in flooded
						fields.
					</p>
				</div>
				<Image
					src={CaseWorm}
					alt="CaseWorm"
					className="h-[500px] w-[500px] rounded-tl-full rounded-bl-full"
				/>
			</div>
			<div className="mx-auto max-w-[1280px] px-8 flex items-center justify-between py-20 font-mono">
				<Image
					src={FalseSmut}
					alt="False Smut"
					className="h-[500px] w-[500px] rounded-tr-full rounded-br-full"
				/>
				<div className="flex flex-col gap-12 text-wrap">
					<h1 className="font-bold text-5xl  text-right ">False Smut</h1>
					<p className="text-wrap  text-right ">
						The brown planthopper is a small brown insect that sucks juice from
						rice plants. It appears more during rainy times. The insect makes
						plants turn brown and die.
					</p>
				</div>
			</div>
		</div>
	);
}
