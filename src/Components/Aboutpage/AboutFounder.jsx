import React from "react";
import { Founder } from "../../assets";

const AboutFounder = () => {
  return (
    <div className="flex  w-screen">
      <div className="w-[50%] pl-[128px] flex flex-col justify-center gap-[20px]">
        <h1 className="text-[64px] font-bold text-primaryRed">About Founder</h1>
        <p className="text-justify text-[18px]">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The founder of NAALVAR
          DIAGNOSTICS DRUGS, DR K. KOUMARAVELOU holds a distinguished academic
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
      <div className="flex justify-center items-center w-[50%]">
        <img src={Founder} alt="" />
      </div>
    </div>
  );
};

export default AboutFounder;
