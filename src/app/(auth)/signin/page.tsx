import { Button, Input } from "@/components/ui";

export default function SignIn() {
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="flex gap-2 font-bold text-2xl">
						<span>Rice</span>
						<span className="text-[#7241FF]">Sentry</span>
					</div>
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
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
									className="block w-full rounded-md bg-white px-3 py-1.5 text-base placeholder:text-gray-400  focus:outline-indigo-600 sm:text-sm/6"
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
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<Input
									id="password"
									name="password"
									type="password"
									required
									autoComplete="current-password"
									className="block w-full rounded-md bg-white px-3 py-1.5 text-base placeholder:text-gray-400  focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<Button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
