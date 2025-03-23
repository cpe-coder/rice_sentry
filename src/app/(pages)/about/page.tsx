export default function About() {
	return (
		<div className=" bg-[url('/rice-background2.jpg')] bg-bottom bg-no-repeat bg-cover items-center back justify-center w-full">
			<div className="flex flex-col gap-10 max-w-[2080px] px-8">
				<div className="flex flex-col backdrop-blur-xs p-6 rounded-lg pb-10">
					<h1 className="text-4xl font-mono font-extrabold text-indigo-800">
						What is Rice Sentry?
					</h1>
					<div className="flex flex-col gap-5">
						<p className="font-semibold text-lg text-wrap">
							RiceSentry is a web application that help rice farmers detect
							pests and diseases in their crops. It uses artificial intelligence
							<span className="text-indigo-800 font-bold">(AI)</span>
							and a special image-processing technology called Convolutional
							Neural Networks{" "}
							<span className="text-indigo-800 font-bold">(CNN)</span>.
						</p>
						<p className="font-semibold text-lg text-wrap">
							Farmers can take pictures of their rice plants, and the app will
							analyze the images to identify common problems. It then provides
							recommendations on how to manage these issues.
						</p>
					</div>
				</div>
				<div className="flex flex-col backdrop-blur-xs p-6 rounded-lg">
					<h1 className="text-4xl font-mono font-extrabold text-indigo-800">
						How to Use Rice Sentry?
					</h1>
					<div className="flex flex-col gap-2 text-wrap">
						<p className="font-semibold text-xl">
							Start using RiceSentry in just a few easy steps!
						</p>
						<p className="font-semibold text-lg text-wrap">
							1. Use your phone’s camera to take a clear photo of the rice
							plant, focusing on the affected area.
						</p>
						<p className="font-semibold text-lg text-wrap">
							2. Tap the upload button to send the image to the system for
							analysis.
						</p>
						<p className="font-semibold text-lg text-wrap">
							3. The app will quickly analyze the image and tell you if your
							rice plant is healthy or has pests or diseases.
						</p>
						<p className="font-semibold text-lg text-wrap">
							4. If a problem is found, the system will provide advice on how to
							treat or prevent it.
						</p>
						<p className="font-semibold text-lg text-wrap">
							5. You can save the diagnosis for future reference or share it
							with other farmers or agricultural experts.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
