"use client";

import { Button } from "@/components/ui";
import { Image as UImage, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader() {
	const [image, setImage] = React.useState<string | null>(null);
	const [file, setFile] = React.useState<File | null>(null);
	const [loading, setLoading] = React.useState(false);
	const [result, setResult] = React.useState<{
		name: string;
		description: string;
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

	React.useEffect(() => {
		console.log("Result:", result);
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

		const toBase64 = (file: File): Promise<string> =>
			new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve((reader.result as string).split(",")[1]); // Remove "data:image/png;base64,"
				reader.onerror = (error) => reject(error);
			});

		const formData = new FormData();
		formData.append("file", file);

		try {
			const base64Image = await toBase64(file);

			const response = await fetch("http://localhost:8000/upload/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					filename: file.name,
					image_base64: base64Image,
				}),
			});

			const data = await response.json();
			setResult(data.message);
		} catch (error) {
			console.error("Error uploading file:", error);
			setResult({ name: "Error", description: "Upload failed." });
		}
	};
	return (
		<div className="bg-[url('/detection-background.jpg')] bg-bottom bg-no-repeat bg-cover items-center justify-center w-full min-h-screen">
			<title>RiceSentry • Detection</title>
			<div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 py-20">
				<div className="flex flex-col items-center justify-center pb-10">
					<h1 className="text-3xl text-center backdrop-blur-md p-2 rounded-sm font-bold text-indigo-600">
						RiceSentry Pest and Disease
					</h1>
					<p className="text-center text-white">
						Upload or paste an image of your crop to check for potential
						diseases.
					</p>
				</div>

				<div className="flex flex-col gap-2 backdrop-blur-sm px-5 py-8 rounded-lg bg-background">
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
						<p className="text-center text-gray-300 md:text-white lg:text-white py-2 md:text-start lg:text-start">
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

					{result && (
						<div className="mt-4 p-4 bg-gray-100 rounded-lg">
							<h3 className="text-lg font-semibold">Detection Result:</h3>
							<p>
								<strong>Name:</strong> {result.name}
							</p>
							<p>
								<strong>Description:</strong> {result.description}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
