"use client";

import { Button } from "@/components/ui";
import axios from "axios";
import { Image as UImage, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDropzone } from "react-dropzone";

export default function ImageUploader() {
	const [image, setImage] = React.useState<string | null>(null);
	const [file, setFile] = React.useState<File | null>(null);
	const [loading, setLoading] = React.useState(false);
	const [result, setResult] = React.useState<{
		class: string;
		confidence: string;
		details: {
			Disease: string;
			Description: string;
			Recommendations: string;
			Pesticide: string;
			Guidelines: string;
		};
	} | null>(null);

	const onDrop = React.useCallback((acceptedFiles: File[]) => {
		const uploadedFile = acceptedFiles[0];
		if (uploadedFile) {
			const url = URL.createObjectURL(uploadedFile);
			setImage(url);
			setFile(uploadedFile);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		noClick: true,
	});

	const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
		const items = event.clipboardData.items;
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			if (item.type.startsWith("image")) {
				const pastedFile = item.getAsFile();
				if (pastedFile) {
					const url = URL.createObjectURL(pastedFile);
					setImage(url);
					setFile(pastedFile);
				}
			}
		}
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const uploadedFile = event.target.files?.[0];
		if (uploadedFile) {
			const url = URL.createObjectURL(uploadedFile);
			setImage(url);
			setFile(uploadedFile);
		}
	};

	const handleRemoveImage = () => {
		setImage(null);
		setFile(null);
		setResult(null);
	};

	const handleProcessImage = async () => {
		if (!file) return;
		setLoading(true);
		if (file) {
			try {
				const formData = new FormData();
				formData.append("file", file);
				await axios({
					method: "POST",
					url: "http://localhost:8000/predict",
					data: formData,
				}).then((res) => {
					if (res.status == 200) {
						setResult(res.data);
						console.log(res.data);
						setLoading(false);
					}
				});
			} catch (error) {
				console.error("Error uploading file:", error);
			}
		}
	};

	return (
		<div className="bg-[url('/detection-background.jpg')] bg-bottom bg-no-repeat bg-cover items-center justify-center w-full min-h-screen">
			<title>RiceSentry • Detection</title>
			<div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 py-6 md:py-14 lg:py-20">
				<div className="flex flex-col items-center justify-center pb-10">
					<h1 className="text-3xl text-center backdrop-blur-md p-2 rounded-sm font-bold text-indigo-600">
						RiceSentry Pest and Disease
					</h1>
					<p className="text-center text-white">
						Upload or paste an image of your crop to check for potential
						diseases.
					</p>
				</div>

				<div
					className={`flex flex-col gap-2 backdrop-blur-sm px-2  rounded-lg bg-background ${
						result ? "py-5" : "py-8"
					}`}
				>
					{!result && (
						<>
							<div
								{...getRootProps()}
								className={`border-[2px] border-indigo-500 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all 
							${isDragActive && "bg-indigo-100/50"}`}
								onPaste={handlePaste}
							>
								<input {...getInputProps()} />
								<input
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleFileUpload}
									id="fileUpload"
								/>
								{image ? (
									<div className="relative w-full h-64 flex justify-center items-center">
										<Image
											src={image}
											alt="Uploaded Preview"
											className="rounded-lg"
											layout="fill"
											objectFit="contain"
										/>
										<button
											onClick={handleRemoveImage}
											className="absolute top-0 right-0 hover:cursor-pointer active:opacity-70 hover:bg-gray-300/10 hover:transition-all hover:duration-300 transition-all duration-300 p-2 rounded-full text-red-500"
										>
											<XCircle size={24} />
										</button>
									</div>
								) : (
									<div className="flex flex-col items-center justify-center gap-3">
										<UImage
											size={48}
											className="dark:text-gray-300 text-gray-500"
										/>
										<p className="text-lg dark:text-gray-300 flex gap-2 text-gray-500">
											<label
												htmlFor="fileUpload"
												className="font-bold text-lg hover:cursor-pointer hover:text-indigo-600 transition-all dark:text-white text-foreground duration-300 hover:transition-all hover:duration-300"
											>
												Upload a file
											</label>
											<span className="hidden md:flex lg:flex">
												or drag and drop
											</span>
										</p>
										<p className="text-xs md:text-sm lg:text-sm dark:text-gray-300 text-gray-500">
											PNG, JPG, up to 10MB
										</p>
									</div>
								)}
							</div>
							<div className="grid grid-cols-1 md:flex lg:flex justify-between gap-4 md:gap-0 lg:gap-0">
								<p className="text-center py-2 md:text-start lg:text-start">
									Click process button after uploading an image
								</p>
								<Button
									className="bg-indigo-600 px-10 hover:cursor-pointer text-white hover:bg-indigo-800"
									onClick={handleProcessImage}
									disabled={!file || loading}
								>
									{loading ? "Processing..." : "Process"}
								</Button>
							</div>
						</>
					)}

					{result && (
						<div className="p-6  rounded-lg">
							<div>
								<div className="flex items-center justify-center md:justify-between lg:justify-between">
									<h1 className="font-bold text-xl md:text-2l lg:text-3xl text-center lg:text-left md:text-left">
										{result.details.Disease}
									</h1>
									<div className="lg:flex md:flex justify-center gap-2 hidden items-center">
										<h1 className="text-base">Accuracy</h1>
										<div className="w-16 ">
											<CircularProgressbar
												value={Number(result.confidence)}
												text={`${result.confidence}%`}
												background
												backgroundPadding={8}
												styles={buildStyles({
													backgroundColor: "#4f39f6",
													textColor: "#fff",
													textSize: "16",
													pathColor: "#fff",
													trailColor: "#010314",
												})}
											/>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-center w-full py-8">
									{image && (
										<Image
											className="rounded-lg w-[200px] md:w-[300px] lg:w-[400px]"
											width={0}
											height={0}
											src={image}
											alt="Uploaded image"
										/>
									)}
								</div>
								<div className="flex flex-col justify-center md:hidden lg:hidden gap-2 items-center">
									<h1 className="text-base">Accuracy</h1>
									<div className="w-16 ">
										<CircularProgressbar
											value={Number(result.confidence)}
											text={`${result.confidence}%`}
											background
											backgroundPadding={8}
											styles={buildStyles({
												backgroundColor: "#4f39f6",
												textColor: "#fff",
												textSize: "16",
												pathColor: "#fff",
												trailColor: "#010314",
											})}
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col text-wrap gap-5 bg-foreground rounded-lg px-4 py-6 mt-6">
								<h1>
									<span className="font-bold text-background">
										Description:
									</span>{" "}
									<span className="text-background">
										{result.details.Description}
									</span>
								</h1>
								<h1>
									<span className="font-bold text-background">
										Recommendations:
									</span>{" "}
									<span className="text-background">
										{result.details.Recommendations}
									</span>
								</h1>
								<h1>
									<span className="font-bold text-background">Pesticide:</span>{" "}
									<span className="text-background">
										{result.details.Pesticide}
									</span>
								</h1>
								<h1>
									<span className="font-bold text-background">Guidelines:</span>{" "}
									<span className="text-background">
										{result.details.Guidelines}
									</span>
								</h1>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
