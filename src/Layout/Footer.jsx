import React from "react";
import { LogoWhite } from "../assets";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primaryBlack text-[#9E9E9E] flex justify-center items-center py-6 px-[7.5vw]">
      <div className="w-full">
        <div className="flex justify-normal max-md:flex-col max-md:gap-[50px]">
          <div className="flex gap-[50px] w-[60%] max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center">
            <a href={"/"} className="flex items-center gap-2">
              <img
                src={LogoWhite}
                alt="Naalvar Diagnostics Logo"
                className="min-w-[150px] object-fill"
              />
            </a>
            <div className="flex flex-col gap-5">
              <h2 className="font-bold text-[32px] max-w-[444px] leading-[110%]">
                Naalvar Diagnostic Drugs Private Limited
              </h2>
              <p className="max-w-[380px] text-[10px] leading-[150%] max-md:hidden">
                NAALVAR DIAGNOSTICS DRUGS offers high-quality pharmaceutical
                soaps designed for superior skin health and hygiene. Our
                formulations ensure safety, effectiveness, and daily protection
                against skin issues.
              </p>
            </div>
          </div>

          <div className="w-[40%] flex flex-col gap-[18px] justify-end items-end max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center">
            <nav className="max-md:w-screen max-md:flex max-md:justify-center">
              <ul className="flex md:gap-8 max-md:justify-around max-md:w-full">
                <li>
                  <Link to="/" className="hover:text-white duration-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white duration-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/product/showAll" className="hover:text-white duration-500">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white duration-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>


            <address className="flex gap-[18px] not-italic text-[14px] leading-[150%]">
              <div>
                <p>Plot No. 44, R. S. No. 268/5A</p>
                <p>Poothurai Village, Vanur Taluk</p>
                <p>Villipuram District, Tamilnadu-605110</p>
              </div>
              <div>
                <strong>Mobile</strong>
                <p>+91 9443309034</p>
              </div>
            </address>
          </div>
        </div>

        <div className="min-h-[1px] bg-slate-300 my-[20px]" />

        <div className="flex justify-between text-[16px] max-md:text-xs">
          <p>
            © 2025 Naalvar Diagnostic Drugs.
            <span className="md:hidden">
              <br />
            </span>
            All rights reserved.
          </p>
          <p>Design by DeCo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
