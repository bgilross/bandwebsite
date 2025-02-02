"use client"

import Image from "next/image"
import ImageCarousel from "../components/ImageCarousel"
import { Sancreek } from "next/font/google"
import Contact from "../components/Contact"
import ImgCarousel from "@/components/ImgCarousel"

const sancreek = Sancreek({
	subsets: ["latin"],
	weight: "400",
})

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
			<div>
				<ImgCarousel />
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

			<Contact />
		</div>
	)
}
