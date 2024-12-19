"use client"

import Image from "next/image"
import ImageCarousel from "../components/ImageCarousel"

export default function Home() {
	return (
		<div className="h-auto w-full">
			{/* LANDING */}
			<div className="min-h-screen w-full flex justify-center items-center">
				<Image
					className="animate-fadeIn mb-10 opacity-80"
					src="/logoBG.png"
					alt="logo"
					width={1000}
					height={800}
				/>
			</div>

			{/* BAND IMAGE CAROUSEL */}
			<div className="min-h-screen w-full flex justify-center items-center">
				{/* <Image
					className="rounded-3xl shadow-3xl mix-blend-luminosity"
					src="/bandphoto2.png"
					alt="band"
					width={700}
					height={600}
				/> */}
				<ImageCarousel />
			</div>

			{/* UPCOMING SHOWS */}
			<div className="flex min-h-screen w-full items-center justify-center">
				{/* <div className="flex w-full h-full justify-center items-center gap-12 mb-12">
					<div className="w-[30%] h-[30vh] bg-black rounded-2xl opacity-50 text-white">
						UPCOMING
					</div>
					<div className="w-[30%] h-[30vh] bg-black rounded-2xl opacity-50 text-white">
						UPCOMING
					</div>
				</div>
				<div className="flex w-full h-full justify-center items-center gap-12">
					<div className="w-[30%] h-[30vh] bg-black rounded-2xl opacity-50 text-white">
						UPCOMING
					</div>
					<div className="w-[30%] h-[30vh] bg-black rounded-2xl opacity-50 text-white">
						UPCOMING
					</div>
				</div> */}
				<Image
					className="mt-6 mix-blend-darken shadow-3xl rounded-xl"
					src="/bandshow1.png"
					alt="band"
					width={500}
					height={500}
				/>
			</div>

			{/* CONTACT */}
			<div className="min-h-screen w-full flex justify-center items-center">
				<form className="flex flex-col justify-center items-center gap-1 w-full max-w-[600px] rounded-lg h-full min-h-[500px]">
					<div className="pb-8">
						<p className="text-4xl font-bold inline border-b-4 text-black">
							Contact
						</p>
						<p className="text-yellow-300 text-xl py-4">
							Submit the form below to shoot us an email!
						</p>
					</div>
					<label className="mr-1">
						Name:
						<input
							className="input-style"
							id="name"
							type="text"
							placeholder="Name"
						/>
					</label>
					<label>
						Email:
						<input
							className="input-style"
							id="email"
							type="email"
							placeholder="Email"
						/>
					</label>
					<label className="mr-4">
						Subject:
						<input
							className="input-style"
							id="subject"
							type="text"
							placeholder="Subject"
						/>
					</label>
					<label className="flex ml-2">
						Body:
						<textarea
							className="input-style"
							id="text"
							placeholder="Body"
						/>
					</label>
				</form>
			</div>
		</div>
	)
}
