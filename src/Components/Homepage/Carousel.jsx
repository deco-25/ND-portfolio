import React, { useEffect, useRef, useState } from "react";
import { Soap1, Soap2, Soap3 } from "../../assets";
import { IconChevronRight } from "@tabler/icons-react";

const images = [
  {
    src: Soap1,
    label: "Soap 1",
  },
  {
    src: Soap2,
    label: "Soap 2",
  },
  {
    src: Soap3,
    label: "Soap 3",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 8000);
    return () => resetTimeout();
  }, [current]);

  const handleDotClick = (index) => {
    resetTimeout();
    setCurrent(index);
  };

  return (
    <div className="relative w-screen h-[100dvh] max-md:h-[40dvh] overflow-hidden">
      {/* Image Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.label}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Dots with labels */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {images.map((image, index) => (
          <div key={index} className="relative group flex items-center">
            <div className="absolute right-6 pr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-[-20%] bg-primaryRed/80 text-white text-xs px-2 py-1 rounded-md pointer-events-none whitespace-nowrap">
              {image.label}
            </div>
            <button
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full border-2 transition ${
                current === index
                  ? "bg-white border-white scale-110"
                  : "bg-white/30 border-white/60 hover:bg-white/50"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="absolute flex justify-center items-center bottom-10 w-screen">
        <button className="flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md bg-primaryRed border hover:shadow-xl border-white/20 text-white transition hover:bg-primaryRed hover:scale-105 shadow-md">
          <span>Know More</span>
          <IconChevronRight size={18} />
        </button>
      </div>
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
    </div>
  );
}
