import React from "react";
import { ScrollButton, Soap3 } from "../../assets";

const Hero = () => {
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
      <div className="px-[80px] text-shadow-xl leading-[75px] mb-[15vh]">
        <h1 className="text-[70px]  font-bold text-white ">Naalvar</h1>
        <h1 className="text-[70px] font-bold text-white">Diagnostics Drugs</h1>
        <p className="text-[24px] text-white italic">
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
      <div className="absolute bottom-0 left-0 right-0 min-h-[10vh] w-screen z-[20]">
        <div className="w-full min-h-[5vh] flex">
          <div className="min-w-[70%]" />
          <div className="min-w-[30%] bg-primaryRed/80"></div>
        </div>
        <div className="w-full min-h-[5vh] flex">
          <div className="min-w-[70%] bg-primaryRed" />
          <div className="min-w-[30%] flex px-[10px] items-center bg-white justify-center">
            <div className="flex items-center justify-center">
              <img src={ScrollButton} alt="" className="w-[30px]" />
              <h1 className="text-[16px]">Scroll for more</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
