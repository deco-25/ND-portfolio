import React from "react";
import { ScrollButton, Soap3 } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from("#red-strip-1", {
      minWidth: 0,
      duration: 1,
    }).from(
      "#red-strip-2",
      {
        x: "-70vw",
        duration: 1,
      },
      0
    ); // 👈 Start this at the same time as previous
  }, []);

  return (
    <div
      className="min-h-screen w-screen relative flex items-end"
      style={{
        backgroundImage: `url(${Soap3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*Hero Content*/}
      <div className="px-[7.5vw] text-shadow-xl leading-[75px] mb-[15vh] max-md:mb-[20vh] max-md:text-[40px]">
        <h1 className="text-[70px] max-md:text-6xl font-bold text-white ">
          Naalvar
        </h1>
        <h1 className="text-[70px] max-md:text-4xl font-bold text-white">
          Diagnostics Drugs
        </h1>
        <p className="text-[24px] max-md:text-sm text-white italic">
          where innovation meets care in every bar of soap
        </p>
      </div>
      {/* Left Strips */}
      <div className="absolute h-full top-0 right-0 min-w-[10vw] z-[30] flex justify-center items-center">
        <div className="w-full flex flex-col gap-[20px] overflow-hidden">
          {Array.from({ length: 24 }).map((_, index) => {
            return (
              <div className="w-full h-[4px] bg-white opacity-90 hover:translate-x-[100px] duration-200 ease-linear" />
            );
          })}
        </div>
      </div>
      {/* Bottom Strips */}
      <div className="absolute bottom-0 left-0 right-0 min-h-[10vh] max-md:min-h-[15vh] w-screen z-[20]">
        <div className="w-full min-h-[5vh] max-h-[5vh] max-md:max-h-[7.5vh] max-md:min-h-[7.5vh] flex">
          <div className="min-w-[70%] max-md:min-w-[60%]" />
          <div
            id="red-strip-1"
            className="min-w-[30%] max-md:min-w-[40%] bg-primaryRed"
          ></div>
        </div>
        <div className="w-full bg-white min-h-[5vh] max-h-[5vh] max-md:min-h-[7.5vh] flex">
          <div
            id="red-strip-2"
            className="min-w-[70%] max-md:min-w-[60%] bg-primaryRed"
          />
          <div className="min-w-[30%] max-md:min-w-[40%] flex md:px-[10px] items-center bg-white md:justify-end md:px-[7.5vw]">
            <div className="flex items-center justify-center">
              <img src={ScrollButton} alt="" className="w-[30px] " />
              <h1 className="text-[16px] max-md:text-xs">Scroll for more</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
