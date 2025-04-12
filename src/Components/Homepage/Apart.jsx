import React from "react";
import { Soap2 } from "../../assets";
import { TreeDeciduous } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Carousel from "./Carousel";

const Apart = () => {
  gsap.registerPlugin(ScrollTrigger);

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

  return (
    <section className="font-poppins" aria-labelledby="apart-heading">
      {/* Top Image + Decorative Strips */}
      <div className="flex flex-col">
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
      <div className="relative w-screen min-h-screen flex justify-center items-center max-md:py-[80px] max-md:pb-[250px]">
        <div className="flex flex-col md:justify-center items-center md:pb-20 gap-[80px] w-full">
          <h2
            id="apart-heading"
            className="text-[64px] text-primaryRed max-md:text-[32px]"
          >
            What Sets Us Apart
          </h2>

          <div
            id="apart-div"
            className="flex max-md:flex-col justify-around w-screen max-md:items-center max-md:gap-3 px-4"
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
