import Link from "next/link";

export default function About() {
	return (
		<div className="flex bg-[url('/rice-background2.jpg')] bg-bottom bg-no-repeat bg-cover max-w-[2080px] items-center back justify-center h-screen w-full">
			<div className=" h-screen w-full relative"></div>
			<div className="flex absolute max-w-[1280px] w-full justify-between items-center gap-20 mx-auto">
				<div className="flex flex-col text-wrap gap-16 backdrop-blur-sm rounded-md p-6 border">
					<h1 className="text-4xl font-mono font-bolder text-indigo-800">
						What is Rice Sentry?
					</h1>
					<p className="font-semibold text-lg text-wrap">
						Rice Sentry is your digital plant pathologist! Our innovative web
						application allows you to upload images of rice leaves and uses
						advanced AI technology that was trained on custom model with an
						impressive accurary of{" "}
						<span className="text-indigo-800 font-bold">96%</span> to precisely
						diagnose whether your rice plant is healthy or suffering from a
						disease.
					</p>
					<p className="font-semibold text-lg text-wrap">
						Rice Sentry will not only identify it but also provide information
						about the type of disease affecting your crop. With Rice Sentry,
						safeguarding your rice plants&apos; health is just a click away!
					</p>
				</div>
				<div className="flex flex-col text-wrap gap-16 backdrop-blur-sm rounded-sm border p-6">
					<h1 className="text-4xl font-mono font-bolder text-indigo-800">
						How to Use Rice Sentry?
					</h1>
					<p className="font-semibold text-lg text-wrap">
						Embark on your journey with Rice Sentry in just a few simple steps!
						First, prepare a clear photo of your rice leaf - you can either take
						a fresh snap or use an existing image. Navigate to the
						&apos;Detect&apos; page on our web application and upload your
						image. Our advanced AI will then analyze the image and provide you
						with results.
					</p>
					<p className="font-semibold text-lg text-wrap">
						Don&apos;t have a photo at hand? No worries! We&apos;ve got you
						covered. Click{" "}
						<Link
							className="underline text-indigo-800 font-bold"
							href="/disease"
						>
							Here
						</Link>{" "}
						to download a sample image and experience the power of Rice Sentry!
					</p>
				</div>
			</div>
		</div>
	);
}
