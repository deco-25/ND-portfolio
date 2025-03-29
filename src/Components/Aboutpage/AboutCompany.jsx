import React from "react";
import { Logo } from "../../assets/index";

const AboutCompany = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen justify-center items-center px-[256px] gap-[20px] font-poppins">
      <div>
        <img src={Logo} alt="" className="max-w-[200px]" />
      </div>
      <div className="text-justify text-[18px]">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NAALVAR DIAGNOSTICS DRUGS was
          established in 2021, under the leadership of a qualified pharmacist
          who is having 20 years of experience in Pharma Production and engaging
          in exclusive production of Medicated Toiletry soap formulations. Our
          operations started in February 2021 and involve in planning,
          designing, procurement of Raw materials & Packing materials and
          storage of Active Pharmaceutical Ingredients in appropriate
          temperature, testing, manufacturing, final release of finished
          products for distribution in India. A well document manufacturing and
          testing procedures are followed at every stage of the operations as
          per cGMP guidelines.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
