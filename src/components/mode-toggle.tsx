"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useState } from "react";

export function ModeToggle() {
	const { setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	const handleClick = () => {
		setIsDark(!isDark);
		if (!isDark) {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<Button
			onClick={handleClick}
			className="p-0 text-md hover:cursor-pointer"
			size="icon"
			variant="ghost"
		>
			{isDark ? <MoonStar /> : <Sun />}
		</Button>
	);
}
