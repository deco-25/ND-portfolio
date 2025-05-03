import React, { useEffect, useRef, useState } from "react";
import { Soap2 } from "../../assets";
import { TreeDeciduous } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Carousel from "./Carousel";
import Slider from "react-slick";

const Apart = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sliderRef = useRef(null);
  const autoplayTimeoutRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplaySpeed = 4000;

  useGSAP(() => {
    const strips = gsap.timeline({
      scrollTrigger: {
        trigger: "#apart-div",
        start: "bottom bottom",
      },
    });

    strips
      .from("#red-strip-4", { x: "30vw", duration: 1 }, 0.5)
      .from("#red-strip-3", { x: "-70vw", duration: 1 }, 0.5);
  });

  const USP = [
    {
      title: "Pharmaceutical Grade Formulas",
      desc: "We ensure the highest pharmaceutical-grade ingredients that are safe and effective.",
    },
    {
      title: "Skin Sensitivity Focus",
      desc: "Our products are developed keeping sensitive skin in mind, free of irritants.",
    },
    {
      title: "Scientifically-Backed Ingredients",
      desc: "Only ingredients with proven clinical results make it into our formulations.",
    },
    {
      title: "Environmental Responsibility",
      desc: "Sustainability is at the core of our packaging and ingredient sourcing.",
    },
    {
      title: "Customer-Centric Approach",
      desc: "Your skin journey matters to us—every formula is made with you in mind.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
          adaptiveHeight: true,
          variableWidth: false,
          swipeToSlide: true,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="font-poppins overflow-x-hidden" aria-labelledby="apart-heading">
      {/* Top Image + Decorative Strips */}
      <div className="flex flex-col max-w-screen">
        <Carousel />
        <div className="flex justify-center" aria-hidden="true">
          <div className="flex gap-[16px] max-md:gap-[8px]">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex gap-[16px] max-md:gap-[8px]">
                {[94, 78, 78, 78, 78, 78, 78].map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}px` }}
                    className={`min-w-[1px] bg-primaryRed ${
                      idx === 0 ? "max-md:h-[70px]" : "max-md:h-[56px]"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* What Sets Us Apart Section */}
      <div className="relative w-screen md:min-h-screen flex justify-center items-center max-md:py-[80px] max-md:pb-[200px]">
        <div className="flex flex-col md:justify-center items-center md:pb-20 gap-16 md:gap-[80px] w-full">
          <h2
            id="apart-heading"
            className="text-[64px] text-primaryRed max-md:text-[32px]"
          >
            What Sets Us Apart
          </h2>

          {/* desktop */}
          <div
            id="apart-div"
            className="hidden md:flex max-md:flex-col justify-around w-screen max-md:items-center max-md:gap-3 px-4"
          >
            {USP.map((item, ind) => (
              <article
                key={ind}
                className={`relative flex flex-col group animate-floatSlow gap-[20px] px-[40px] py-[35px] shadow-xl w-fit rounded-[12px] overflow-hidden ${
                  ind % 2 === 0 ? "max-md:right-8" : "md:top-8 max-md:left-8"
                }`}
                style={{ animationDelay: `${ind * 0.5}s` }}
                aria-label={item.title}
              >
                {/* Icon */}
                <div
                  className={`${
                    ind % 2 === 0 ? "bg-primaryBlue" : "bg-primaryRed"
                  } w-fit flex justify-center items-center p-4 rounded-[8px]`}
                >
                  <TreeDeciduous size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="max-w-[140px] text-[14px] font-semibold">
                  {item.title}
                </h3>

                <div className="min-w-[50px] max-w-[50px] h-[2px] bg-primaryBlue" />

                {/* Hover Description */}
                <div
                  className={`absolute top-[100%] left-0 right-0 group-hover:top-0 ${
                    ind % 2 === 0 ? "bg-primaryBlue/90" : "bg-primaryRed/95"
                  } duration-700 ease-out w-full rounded-[12px] h-full`}
                >
                  <h4 className="p-2 font-semibold text-white">{item.title}</h4>
                  <p className="px-3 text-white text-sm">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          
          {/* Mobile slider with navigation controls */}
          <div className="md:hidden w-full flex justify-center items-center relative">
            <div className="relative w-[90%] mx-auto px-4">
            <div className="absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r from-white via-white to-transparent pointer-events-none"></div>
              <Slider ref={sliderRef} {...settings} className="w-full">
                {USP.map((item, ind) => (
                  <div key={ind} className="px-3 py-2">
                    <article
                      className="flex flex-col items-start gap-4 bg-white rounded-xl shadow-md md:shadow-xl p-4 animate-floatSlow h-full"
                      style={{ animationDelay: `${ind * 0.5}s` }}
                      aria-label={item.title}
                    >
                      {/* Left: Icon + Title */}
                      <div className="flex flex-col gap-2 flex-[1] min-w-0">
                        <div className={`p-3 rounded-md w-fit ${ind % 2 === 0 ? "bg-primaryBlue" : "bg-primaryRed"}`}>
                          <TreeDeciduous size={24} className="text-white" />
                        </div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <div className="h-[2px] w-[40px] bg-primaryBlue" />
                      </div>

                      {/* Right: Description */}
                      <div className={`flex-[2] mt-2 min-w-0 rounded-md p-3 text-white w-full ${ind % 2 === 0 ? "bg-primaryBlue/90" : "bg-primaryRed/95"}`}>
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-xs">{item.desc}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
              <div className="absolute right-0 top-0 h-full w-8 z-10 bg-gradient-to-l from-white via-white to-transparent pointer-events-none"></div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-2 z-20">
              <button 
                onClick={handlePrev} 
                className="bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center"
                aria-label="Previous slide"
              >
                <span className="sr-only">Previous</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext} 
                className="bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center"
                aria-label="Next slide"
              >
                <span className="sr-only">Next</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Strips */}
        <div className="absolute bottom-0 left-0 right-0 min-h-[10vh] max-md:max-h-[10vh] w-screen z-[20]">
          <div className="w-full min-h-[5vh] flex">
            <div id="red-strip-3" className="min-w-[70%] bg-primaryRed" />
            <div className="min-w-[30%]" />
          </div>
          <div className="w-full min-h-[5vh] flex">
            <div className="min-w-[70%]" />
            <div id="red-strip-4" className="min-w-[30%] bg-primaryRed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apart;