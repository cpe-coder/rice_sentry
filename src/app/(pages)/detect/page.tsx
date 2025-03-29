"use client";

import { Button } from "@/components/ui";
import { Image as UImage, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader() {
	const [image, setImage] = React.useState<string | null>(null);

	const onDrop = React.useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setImage(url);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		noClick: true, // Prevents click triggering file selection automatically
	});

	const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
		const items = event.clipboardData.items;
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			if (item.type.startsWith("image")) {
				const file = item.getAsFile();
				if (file) {
					const url = URL.createObjectURL(file);
					setImage(url);
				}
			}
		}
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setImage(url);
		}
	};

	const handleRemoveImage = () => {
		setImage(null);
	};

	console.log(image);

	return (
		<div className=" bg-[url('/detection-background.jpg')] bg-bottom bg-no-repeat bg-cover items-center justify-center w-full min-h-screen">
			<div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-8 py-5 md:py-10 lg:py-20">
				<div className="flex flex-col items-center justify-center pb-10">
					<h1 className="text-3xl backdrop-blur-md p-2 rounded-sm font-bold text-center text-indigo-600">
						RiceSentry Pest and Disease{" "}
					</h1>
					<p className="text-center text-white">
						Upload or paste an image of your crop to check for potential
						diseases.
					</p>
				</div>
				<div className="flex flex-col gap-4 md:gap-8 lg:gap-8 backdrop-blur-sm px-5 py-8 rounded-lg bg-background">
					<div
						{...getRootProps()}
						className={`border-[2px] border-indigo-500 border-dashed rounded-lg p-6  text-center cursor-pointer transition-all 
      ${isDragActive && " bg-indigo-100/50"}`}
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
							<div className="relative w-full h-64 flex justify-center items-center ">
								<Image
									src={image}
									alt="Uploaded Preview"
									className="rounded-lg"
									layout="fill"
									objectFit="contain"
								/>

								<button
									onClick={handleRemoveImage}
									className="absolute top-2 right-2 hover:cursor-pointer active:opacity-70 hover:bg-gray-300/10 hover:transition-all hover:duration-300 transition-all duration-300 p-2 rounded-full text-red-500"
								>
									<XCircle size={24} />
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center justify-center gap-3 ">
								<UImage
									size={48}
									className=" dark:text-gray-300 text-gray-500"
								/>
								<p className="text-lg dark:text-gray-300 text-gray-500">
									{" "}
									<label
										htmlFor="fileUpload"
										className="font-bold text-base md:text-lg lg:text-lg hover:cursor-pointer hover:text-indigo-600 transition-all dark:text-white text-foreground duration-300 hover:transition-all hover:duration-300"
									>
										Upload a file
									</label>{" "}
									<span className="hidden md:block lg:block">
										or drag and drop
									</span>
								</p>
								<p className="text-xs md:text-sm lg:text-sm dark:text-gray-300 text-gray-500">
									PNG, JPG, up to 10MB
								</p>
							</div>
						)}
					</div>
					<div className="flex flex-col w-full gap-5 text-center justify-between">
						<p className="text-sm md:text-base lg:text-lg text-gray-400">
							Click process button after uploading image
						</p>
						<Button className="bg-indigo-600 px-10 w-full hover:cursor-pointer text-white hover:bg-indigo-800">
							Process
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
