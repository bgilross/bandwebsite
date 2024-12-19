import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url("/bigpaperBG.png")]`}
			>
				<div className="h-14 w-1/2 p-2 sticky top-5 z-50 left-1/2 -translate-x-1/2 rounded-3xl bg-black bg-opacity-60 flex justify-between items-center">
					<div className="flex gap-3 ml-3">
						<Image
							src="/facebook-cropped.png"
							alt="facebook"
							width={40}
							height={5}
							className="rounded-full"
						/>
						<Image
							src="/instagram-cropped.png"
							alt="instagram"
							width={40}
							height={5}
							className="rounded-full"
						/>
					</div>
					<div className="flex text-white gap-4 mr-3">
						<div>HOME</div>
						<div>PICS</div>
						<div>CONTACT</div>
					</div>
				</div>
				{children}
			</body>
		</html>
	)
}
