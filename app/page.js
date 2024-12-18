import Image from "next/image"

export default function Home() {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<Image
				className="animate-fadeIn mb-12"
				src="/logoBG.png"
				alt="logo"
				width={900}
				height={700}
			/>
		</div>
	)
}
