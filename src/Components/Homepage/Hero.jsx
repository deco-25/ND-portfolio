import React, { useState, useEffect } from "react";
import { ScrollButton, Soap3, MobileHome, ScrollMore } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bgImage, setBgImage] = useState(Soap3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(MobileHome);
      } else {
        setBgImage(Soap3);
      }
    };

    // Run on mount
    handleResize();

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5, ease: "power2.inOut" });

    tl.from("#red-strip-1", {
      x: "30vw",
      duration: 1,
    }).from(
      "#red-strip-2",
      {
        x: "-70vw",
        duration: 1,
      },
      0
    );
  }, []);

  const scrollToHelloSection = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#hello-container",
      ease: "power2.inOut"
    });
    
  }

  return (
    <>
      <Helmet>
        <title>Naalvar Diagnostics Drugs | Natural Skincare Solutions</title>
        <meta
          name="description"
          content="Welcome to Naalvar Diagnostics Drugs – where innovation meets care in every bar of soap. Explore natural skincare products designed with precision and passion."
        />
        <meta
          name="keywords"
          content="Naalvar, Diagnostic Drugs, Herbal Soap, Natural Care, Skincare, Hero Banner"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <header
        className="h-[100dvh] w-screen relative flex items-end"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Hero Banner with brand introduction"
      >
        {/*Hero Content*/}
        <div className="px-[7.5vw] text-shadow-xl leading-[75px] mb-[15vh] max-md:mb-[20vh] max-md:text-[40px]">
          <h1 className="text-[70px] max-md:text-6xl font-bold text-white">
            Naalvar
          </h1>
          <h2 className="text-[70px] max-md:text-4xl font-bold text-white">
            Diagnostics Drugs
          </h2>
          <p className="text-[24px] max-md:text-sm text-white italic">
            Where innovation meets care in every bar of soap
          </p>
        </div>

        {/* Right Side Hover Strips */}
        <aside
          className="absolute h-full top-0 right-0 min-w-[10vw] z-[30] flex justify-center items-center"
          aria-hidden="true"
        >
          <div className="w-full flex flex-col overflow-hidden">
            {Array.from({ length: 24 }).map((_, index) => {
              let translateClass = "translate-x-0";

              if (hoveredIndex === index) {
                translateClass = "translate-x-10";
              } else if (
                hoveredIndex === index - 1 ||
                hoveredIndex === index + 1
              ) {
                translateClass = "translate-x-6";
              }
              else if (hoveredIndex === index - 2 ||
                hoveredIndex === index + 2){
                translateClass = "translate-x-3";
              }

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`w-full h-[24px] flex items-center justify-center opacity-90 ease-linear`}
                >
                  <div className={`w-full h-[4px] bg-white ${translateClass} transform transition-transform duration-500`}/>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Bottom Strips with Scroll Prompt */}
        <div
          className="absolute bottom-0 left-0 right-0 min-h-[10vh] max-md:min-h-[15vh] w-screen z-[20]"
          aria-hidden="true"
        >
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
            <div className="min-w-[30%] max-md:min-w-[40%] flex md:px-[10px] items-center bg-white md:justify-center md:px-[7.5vw]">
              <div onClick={scrollToHelloSection} className="flex items-center justify-center gap-2 cursor-pointer">
                <img
                  src={ScrollMore}
                  alt="Scroll Down Icon"
                  className="w-[30px]"
                />
                <span className="text-[16px] max-md:text-xs">
                  Scroll for more
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
