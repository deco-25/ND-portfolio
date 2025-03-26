import React from "react";
import { Logo } from "../assets";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primaryBlack text-[#9E9E9E] flex justify-center items-center p-[20px] px-[72px]">
      <div className="w-full">
        <div className="flex justify-normal">
          <div className="flex gap-[50px] w-[60%]">
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
          <div className="w-[40%] flex flex-col gap-[18px] justify-end items-end">
            <div>
              <nav className="text-white flex gap-[38px]">
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Product</ul>
                <ul>Contact</ul>
              </nav>
            </div>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="" />
              </a>
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="" />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="" />
              </a>
            </div>
            <div className="flex gap-[18px]">
              <div className="leading-[150%] text-[14px]">
                <p>Plot No. 44, R. S. No. 268/5A</p>
                <p>Poothurai Village, Vanur Taluk</p>
                <p>Villipuram District, Tamilnadu-605110</p>
              </div>
              <div className="text-[14px] leading-[150%]">
                <h1>Mobile</h1>
                <p>99999 99999</p>
                <p>88888 88888</p>
              </div>
            </div>
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
