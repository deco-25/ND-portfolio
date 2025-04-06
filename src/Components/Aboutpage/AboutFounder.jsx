import React from "react";
import { Founder } from "../../assets";

const AboutFounder = () => {
  return (
    <div className="flex  w-screen px-[7.5vw] max-md:flex-col">
      <div className="w-[50%] max-md:w-full max-md:items-center flex flex-col justify-center gap-[20px]">
        <h1 className="text-[64px] max-md:text-[40px] font-bold text-primaryRed">
          About Founder
        </h1>
        <img src={Founder} alt="" className="md:hidden max-md:w-[200px]" />
        <p className="text-justify ">
          {" "}
          The founder of NAALVAR DIAGNOSTICS DRUGS,{" "}
          <strong>DR K. KOUMARAVELOU</strong> holds a distinguished academic
          background, with a Bachelor of Pharmacy (BPharm), a Master of Pharmacy
          (MPharm), and dual PhDs in [Pharmacology]. As a passionate advocate
          for advancing healthcare and pharmaceutical innovation, [DR
          K.KOUMARAVELOU] brings a wealth of knowledge and expertise to the
          company, driving its mission to improve patient outcomes and create
          groundbreaking solutions in the pharmaceutical industry. With a strong
          foundation in both research and practical applications, [DR
          K.KOUMARAVELOU] is dedicated to pioneering transformative changes in
          the healthcare space.
        </p>
      </div>
      <div className="flex justify-end items-center w-[50%] max-md:hidden">
        <img src={Founder} alt="" />
      </div>
    </div>
  );
};

export default AboutFounder;
