import React from "react";

export default function PagesLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="flex w-full h-screen items-center justify-center bg-[url('/rice.png')] bg-right bg-no-repeat bg-contain">
			{children}
		</div>
	);
}
