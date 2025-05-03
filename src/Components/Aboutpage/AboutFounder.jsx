import React from "react";
import { Founder } from "../../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const AboutFounder = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const img = gsap.timeline({
      scrollTrigger: {
        trigger: "#founder-div",
        start: "center bottom",
      },
    });

    img.from("#founder-img", {
      opacity: 0.5,
      duration: 1,
      ease: "none",
    });
  });

  return (
    <section
      id="founder-div"
      className="flex w-screen md:gap-20 md:items-center lg:items-start lg:gap-60 px-[7.5vw] max-md:flex-col font-poppins py-32 max-md:20"
      aria-labelledby="founder-heading"
    >
      {/* Text Content */}
      <article className="w-[50%] max-md:w-full flex flex-col justify-center gap-[20px] max-md:items-center">
        <h2
          id="founder-heading"
          className="text-[64px]  max-md:text-[40px] font-bold text-primaryRed"
        >
          About Founder
        </h2>

        {/* Image for mobile */}
        <img
          id="founder-img"
          src={Founder}
          alt="Portrait of Dr. K. Koumaravelou, founder of Naalvar Diagnostics Drugs"
          className="md:hidden max-md:w-[200px] rounded-full"
        />

        {/* Paragraph */}
        <p className="text-justify max-w-3xl" data-aos-once="true" data-aos="fade-up">
          The founder of <strong>NAALVAR DIAGNOSTICS DRUGS</strong>,{" "}
          <strong>Dr. K. Koumaravelou</strong>, holds a distinguished academic
          background, including a Bachelor of Pharmacy (BPharm), a Master of
          Pharmacy (MPharm), and dual PhDs in Pharmacology. As a passionate
          advocate for advancing healthcare and pharmaceutical innovation, Dr.
          Koumaravelou brings a wealth of knowledge and expertise to the
          company. He drives its mission to improve patient outcomes and create
          groundbreaking solutions in the pharmaceutical industry. With a strong
          foundation in both research and practical applications, Dr.
          Koumaravelou is dedicated to pioneering transformative changes in the
          healthcare space.
        </p>
      </article>

      {/* Desktop Image */}
      <div className="flex relative justify-end items-center max-h-fit max-md:hidden">
        <img
          src={Founder}
          alt="Portrait of Dr. K. Koumaravelou, founder of Naalvar Diagnostics Drugs"
          className="rounded-full relative z-10 w-[280px]"
        />
        <div className="absolute z-5 w-full h-full rounded-full bg-primaryRed -left-3 top-1"/>
      </div>
    </section>
  );
};

export default AboutFounder;
