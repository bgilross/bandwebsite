import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/bandphoto1.png",
  "/bandphoto2.png",
  "/bandphoto3.png",
  "/bandphoto4.png",
  "/bandphoto5.png",
]; // Add your image paths here

export default function FixedCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='relative w-full flex flex-col items-center'>
      {/* Carousel Container */}
      <div className='relative w-full h-[60vh] flex items-center justify-center overflow-hidden'>
        {images.map((src, index) => {
          const isActive = index === current;
          const isLeft = (index + 1) % images.length === current;
          const isRight =
            (index - 1 + images.length) % images.length === current;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                isActive
                  ? "z-10 scale-105 opacity-100"
                  : isLeft || isRight
                  ? "z-5 scale-95 opacity-80"
                  : "animate-fadeOut opacity-0"
              }`}
              style={{
                hidden: isRight,
                left: isActive ? "50%" : isLeft ? "15%" : isRight ? "85%" : "0",
                transform: "translateX(-50%)",
                width: isActive ? "500px" : "150px", // Consistent width
                height: isActive ? "300px" : "150px", // Consistent height
              }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout='intrinsic'
                width={500}
                height={300}
                className='rounded-xl hover:scale-110 duration-200'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
