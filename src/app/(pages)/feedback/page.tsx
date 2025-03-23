import { Button, Input, Textarea } from "@/components/ui";
import { NotebookPen } from "lucide-react";

export default function Feedback() {
	return (
		<div className="bg-[url('/feedback-background.jpg')] bg-bottom bg-no-repeat bg-cover items-center justify-center w-full">
			<div className=" w-full mx-auto justify-between max-w-[1280px] px-8">
				<div className="flex items-center justify-center w-full min-h-screen">
					<div className="p-6 border rounded-lg border-gray-300 dark:border-gray-800 bg-background/90 w-md min-w-sm">
						<form action="#" method="POST" className="space-y-5 py-8 ">
							<div className="flex items-center justify-center gap-3">
								<NotebookPen />
								<h1 className="text-indigo-600 font-bold text-2xl">
									Send Feedback
								</h1>
							</div>
							<div>
								<label htmlFor="name" className="block text-sm/6 font-medium ">
									Name:
								</label>
								<div className="mt-2">
									<Input
										placeholder="Enter your name"
										id="name"
										name="name"
										type="text"
										required
										autoComplete="name"
										className="max-w-full min-w-xs rounded-sm px-3 py-4 h-13 text-base  sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm/6 font-medium ">
									Email:
								</label>
								<div className="mt-2">
									<Input
										placeholder="Enter your email"
										id="email"
										name="email"
										type="email"
										required
										autoComplete="email"
										className="max-w-full min-w-xs rounded-sm px-3 py-4 h-13 text-base  sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm/6 font-medium "
								>
									Message:
								</label>
								<div className="grid max-w-full min-w-xs gap-2">
									<Textarea rows={3} placeholder="Type your message here." />
									<Button
										type="submit"
										className="hover:cursor-pointer justify-center rounded-sm h-10 bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Send Message
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
