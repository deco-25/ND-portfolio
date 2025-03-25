import React from "react";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-primaryBlack text-[#E0E0E0] flex justify-center items-center p-[20px] px-[72px]">
      <div className="w-full">
        <div className="flex justify-normal">
          <div className="flex gap-[50px] w-[50%]">
            <div>
              <img src={Logo} alt="" className="w-[150px] grayscale" />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-[32px] max-w-[444px]">
                  Naalvar Diagnostic Drugs Private Limited
                </h1>
              </div>
              <div>
                <p className="max-w-[380px] text-[10px] leading-[150%]">
                  NAALVAR DIAGNOSTICS DRUGS offers high-quality pharmaceutical
                  soaps designed for superior skin health and hygiene. Our
                  formulations ensure safety, effectiveness, and daily
                  protection against skin issues.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <nav className="text-white flex gap-[38px]">
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Product</ul>
                <ul>Contact</ul>
              </nav>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="min-h-[1px] bg-black my-[20px]" />
        <div className="flex justify-between text-[16px]">
          <div>
            <h1>© 2025 Naalvar Diagnostic Drugs. All rights reserved.</h1>
          </div>
          <div>
            <h1>Design by DeCo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
