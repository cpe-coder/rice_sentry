import { Copyright } from "lucide-react";

export function Footer() {
	return (
		<div className="p-10 flex justify-center items-center gap-2 font-medium text-sm z-[2000px] mt-6 border-t border-gray-400 dark:border-gray-800">
			<Copyright />
			@2025 Rice Sentry | Developed for Oriental Mindoro Farmers
		</div>
	);
}
