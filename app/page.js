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
				<div className="w-[500px] h-[500px] flex flex-col justify-center items-center bg-[url('/contact1.png')] bg-cover mix-blend-luminosity py-8">
					<div className="w-full h-full flex flex-col justify-center items-center p-4 px-12 gap-3">
						<label className="flex items-center gap-3 font-bold text-lg">
							Name:
							<input
								className="input-style"
								id="name"
								type="text"
								placeholder="Name"
							/>
						</label>
						<label className="flex gap-4 font-bold items-center text-lg">
							Email:
							<input
								className="input-style"
								id="email"
								type="email"
								placeholder="Email"
							/>
						</label>
						<label className="flex items-center font-bold text-lg">
							Subject:
							<input
								className="input-style"
								id="subject"
								type="text"
								placeholder="Subject"
							/>
						</label>
						<label className="flex items-center font-bold gap-5 text-lg">
							Body:
							<textarea
								className="input-style"
								id="text"
								placeholder="Body"
							/>
						</label>
					</div>
					<div className="w-full flex justify-center text-white">
						<input
							className="text-white bg-black w-28 h-10 rounded-lg cursor-pointer"
							id="submit"
							type="submit"
						/>
					</div>
				</div>
				{/* <form className="flex flex-col justify-center gap-1 bg-white mix-blend-darken shadow-xl rounded-lg h-full min-h-[500px]">
					<div className="text-left pb-8 px-11">
						<p className="text-4xl font-bold inline border-b-4 border-blue-700 text-black">
							Contact
						</p>
						<p className="text-black font-bold text-xl">
							Submit the form below to shoot us an email!
						</p>
					</div>
					
				</form> */}
			</div>
		</div>
	)
}
