"use client";

import { Button, Input } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUp() {
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const router = useRouter();
	return (
		<>
			<div className="w-full max-w-xl space-y-6 rounded-lg drop-shadow-lg">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 font-bold text-2xl">
						Log in to
						<span>Rice</span>
						<span className="text-indigo-600">Sentry</span>
					</div>
					<div className=" flex  items-center gap-3">
						<span className="text-base font-semibold text-gray-500  hover:text-white">
							Have an account?
						</span>
						<Button
							variant="outline"
							onClick={() => router.push("/signin")}
							className="px-6 py-4 text-sm hover:cursor-pointer font-medium rounded-sm "
						>
							Sign In <ArrowRight />
						</Button>
					</div>
				</div>
				<div className="p-6 border rounded-lg border-gray-300 dark:border-gray-800">
					<form action="#" method="POST" className="space-y-6">
						<div>
							<label htmlFor="email" className="block text-sm/6 font-medium ">
								Email address
							</label>
							<div className="mt-2">
								<Input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className="block w-full rounded-sm px-3 py-4 h-13 text-base  sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="usename" className="block text-sm/6 font-medium ">
								Username
							</label>
							<div className="mt-2">
								<Input
									id="usename"
									name="username"
									type="text"
									required
									autoComplete="username"
									className="block w-full rounded-sm px-3 py-4 h-13 text-base  sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm/6 font-medium "
								>
									Password
								</label>
								<div className="flex gap-2 items-center">
									<Input
										id="showPassword"
										type="checkbox"
										onChange={() => setShowPassword(!showPassword)}
										className="h-4 w-4"
									/>
									<label htmlFor="showPassword">Show password</label>
								</div>
							</div>
							<div className="mt-2 gap-1">
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									required
									autoComplete="current-password"
									className="block w-full rounded-sm px-3 py-4 text-base h-13 sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="confirmPassword"
									className="block text-sm/6 font-medium "
								>
									Confirm Password
								</label>
								<div className="flex gap-2 items-center">
									<Input
										id="showConfirmPassword"
										type="checkbox"
										onChange={() =>
											setShowConfirmPassword(!showConfirmPassword)
										}
										className="h-4 w-4"
									/>
									<label htmlFor="showConfirmPassword">Show password</label>
								</div>
							</div>
							<div className="mt-2 gap-1">
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type={showConfirmPassword ? "text" : "password"}
									required
									className="block w-full rounded-sm px-3 py-4 text-base h-13 sm:text-sm/6 focus-visible:ring-indigo-600 focus-visible:ring-1"
								/>
							</div>
						</div>

						<div>
							<Button
								type="submit"
								className="flex w-full justify-center hover:cursor-pointer rounded-sm h-10 bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign Up
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
