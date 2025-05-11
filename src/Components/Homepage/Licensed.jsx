import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Helmet } from "react-helmet";

const Licensed = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const licStrips = gsap.timeline({
      scrollTrigger: {
        trigger: "#license-section",
        start: "bottom-=200 bottom",
      },
    });
    const licStripsMob = gsap.timeline({
      scrollTrigger: {
        trigger: "#license-section",
        start: "top bottom",
      },
    });

    licStrips
      .from("#strip-6", { x: "30vw", duration: 1 }, 0)
      .from("#strip-5", { x: "-70vw", duration: 1 }, 0);

    licStripsMob
      .from("#strip-m-6", { x: "30vw", duration: 1 }, 0)
      .from("#strip-m-5", { x: "-70vw", duration: 1 }, 0);
  });

  return (
    <section
      id="license-section"
      className="bg-primaryRed overflow-hidden text-white py-20 w-screen flex justify-center items-center md:px-[7.5vw] max-md:pt-32 max-md:pb-32 font-poppins text-justify relative"
      aria-labelledby="licensed-heading"
    >
      <Helmet>
        <meta
          name="description"
          content="NAALVAR DIAGNOSTICS DRUGS is a licensed manufacturer of medicated toiletry soaps approved by CDSCO and Government of Tamil Nadu. Learn more about our certified facility and activities."
        />
      </Helmet>

      {/* Decorative Strip - Desktop */}
      <div
        className="absolute max-md:hidden top-0 left-0 right-0 min-h-[10vh] w-screen z-[20]"
        aria-hidden="true"
      >
        <div className="w-full min-h-[5vh] flex bg-white">
          <div id="strip-5" className="min-w-[70%] bg-primaryBlack" />
          <div className="min-w-[30%] bg-white" />
        </div>
        <div className="w-full min-h-[5vh] flex">
          <div className="min-w-[70%] bg-primaryRed" />
          <div id="strip-6" className="min-w-[30%] bg-primaryBlack" />
        </div>
      </div>

      {/* Decorative Strip - Mobile */}
      <div
        className="absolute md:hidden top-0 left-0 right-0 min-h-[10vh] w-screen z-[20]"
        aria-hidden="true"
      >
        <div className="w-full min-h-[5vh] flex bg-white">
          <div id="strip-m-5" className="min-w-[70%] bg-primaryBlack" />
          <div className="min-w-[30%] bg-white" />
        </div>
        <div className="w-full min-h-[5vh] flex">
          <div className="min-w-[70%] bg-primaryRed" />
          <div id="strip-m-6" className="min-w-[30%] bg-primaryBlack" />
        </div>
      </div>

      <div className="flex flex-col gap-[40px] max-md:gap-[20px] max-w-6xl px-4">
        <h2
          id="licensed-heading"
          className="text-center text-[64px] max-md:text-[48px] font-semibold"
        >
          Licensed Activities
        </h2>
        <p
          className="max-md:px-[10px] text-[14px] max-md:text-[12px] leading-relaxed"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Our facility is officially licensed to manufacture medicated toiletry
          soaps. Approved by the Central Drugs Standard Control Organization
          (CDSCO) and the Government of Tamil Nadu, we operate with a focus on
          safety, compliance, and quality. We are authorized to produce
          pharmaceutical products in non-toxic and non-hazardous forms like
          soaps for both human and veterinary use. These include both generic
          and proprietary branded formulations, all developed under strict total
          quality management systems. Our state-of-the-art facility is situated
          in a pollution-free environment near Poothurai village, Tamil Nadu,
          and is fully equipped to handle manufacturing, testing, and related
          operations. We are exclusively committed to the formulation and
          production of pharmaceutical soaps, dedicating our expertise to
          delivering specialized solutions that meet the highest standards of
          quality and efficacy. We are exclusively committed to the formulation
          and production of pharmaceutical soaps, dedicating our expertise to
          delivering specialized solutions that meet the highest standards of
          quality and efficacy. And the other thing is in the same para there is
          soaps and creams. Exclude that creams, only soaps
        </p>
      </div>
    </section>
  );
};

export default Licensed;
