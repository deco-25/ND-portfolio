import React from "react";
import { ScrollButton, Soap3 } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
  
    tl.from('#red-strip-1', {
      minWidth: 0,
      duration: 1,
    })
    .from('#red-strip-2', {
      x: "-70vw",
      duration: 1,
    }, 0); // 👈 Start this at the same time as previous
  }, []);
  

  return (
    <div
      className="min-h-screen w-screen relative flex items-center"
      style={{
        backgroundImage: `url(${Soap3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*Hero Content*/}
      <div className="px-[80px] text-shadow-xl leading-[75px]">
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
            return <div className="w-full h-[6px] bg-white opacity-90" />;
          })}
        </div>
      </div>
      {/* Bottom Strips */}
      <div className="absolute bottom-0 left-0 right-0 min-h-[20vh] w-screen z-[20]">
        <div className="w-full min-h-[10vh] flex">
          <div className="min-w-[70%]" />
          <div id="red-strip-1" className="min-w-[30%] bg-primaryRed"></div>
        </div>
        <div className="w-full min-h-[10vh] flex">
          <div id="red-strip-2" className="min-w-[70%] bg-primaryRed"/>
          <div className="min-w-[30%] flex px-[10px] items-center bg-[#FEFFE4]">
            <div className="flex items-center" data-aos={"fade-zoom-in"} data-aos-easing={"ease-in-back" }data-aos-delay={"300"} data-aos-offset={"0"}>
              <img src={ScrollButton} alt="" className="w-[40px]" />
              <h1 className="text-[24px]">Scroll for more</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
