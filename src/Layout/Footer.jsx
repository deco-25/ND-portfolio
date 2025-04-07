import React from "react";
import { Logo, LogoWhite } from "../assets";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primaryBlack text-[#9E9E9E] flex justify-center items-center py-5 md:min-h-[35vh]  md:max-h-[35vh] px-[7.5vw]">
      <div className="w-full ">
        <div className="flex justify-normal max-md:flex-col max-md:gap-[50px]">
          <div className="flex gap-[50px]  w-[60%] max-md max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center">
            <div>
              <img
                src={LogoWhite}
                alt=""
                className="min-w-[150px] object-fill"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="font-bold text-[32px] max-w-[444px] leading-[110%]">
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
          <div className="w-[40%] flex flex-col gap-[18px] justify-end items-end max-md max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center">
            <div className="max-md:w-screen max-md:flex max-md:justify-center">
              <nav className="flex md:gap-8 max-md:justify-around max-md:w-full">
                <Link to="/">
                  <ul>Home</ul>
                </Link>
                <Link to="/about">
                  <ul>About</ul>
                </Link>
                <Link to="/product">
                  <ul>Product</ul>
                </Link>
                <Link>
                <ul>Contact</ul>
                </Link>
              </nav>
            </div>
            <div className="flex space-x-16 text-2xl max-md:justify-around max-md:w-full">
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
        <div className="min-h-[1px] bg-slate-300 my-[20px]" />
        <div className="flex justify-between text-[16px] max-md:text-xs">
          <div>
            <h1>
              © 2025 Naalvar Diagnostic Drugs.
              <span className="md:hidden">
                <br />
              </span>{" "}
              All rights reserved.
            </h1>
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
