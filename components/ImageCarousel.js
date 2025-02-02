import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
	"/bandphoto1.png",
	"/bandphoto2.png",
	"/bandphoto3.png",
	"/bandphoto4.png",
	"/bandphoto5.png",
]

export default function FixedCarousel() {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length)
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="relative w-full flex flex-col items-center overflow-hidden">
			{/* Carousel Container */}
			<div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
				{images.map((src, index) => {
					let position = 100 * (index - current) // Controls left-to-right movement

					return (
						<div
							key={index}
							className="absolute transition-transform duration-700 ease-in-out"
							style={{
								transform: `translateX(${position}%)`,
								width: "500px",
								height: "300px",
								opacity: index === current ? 1 : 0.5,
								zIndex: index === current ? 10 : 5,
							}}
						>
							<Image
								src={src}
								alt={`Image ${index + 1}`}
								layout="intrinsic"
								width={500}
								height={300}
								className="rounded-xl"
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
