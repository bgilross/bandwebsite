import { useState, useEffect } from "react"
import Image from "next/image"

const ImgCarousel = () => {
	const imgs = [
		"/bandphoto1.png",
		"/bandphoto2.png",
		"/bandphoto3.png",
		"/bandphoto4.png",
		"/bandphoto5.png",
	]

	return (
		<div>
			<div className="flex items-center justify-center">
				{imgs.map((src, index) => {
					return (
						<Image
							key={index}
							src={src}
							alt="band"
							width={700}
							height={600}
						/>
					)
				})}
			</div>
			<div></div>
		</div>
	)
}
export default ImgCarousel
