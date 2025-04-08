import React, { useEffect, useState } from "react";
import { Guarantee, Logo, LogoWhite } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <header className="absolute w-screen flex flex-col justify-center items-center mx-auto top-[20px] z-[100] transition-all duration-200">
      {/* Mobile Navbar */}
      <nav
        className={`overflow-hidden md:hidden flex flex-col items-center px-[5vw] rounded-3xl transition-all duration-500 ease-in-out ${
          path === "/" || path === "/product"
            ? "bg-white text-primaryRed"
            : "bg-primaryRed text-white"
        } w-[90%] ${isOpen ? "py-6 h-[250px]" : "py-2 h-[55px]"}`}
        aria-label="Mobile Navigation"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center w-full">
          <img
            src={path === "/" || path === "/product" ? Logo : LogoWhite}
            className="w-[50px]"
            alt="Naalvar Logo"
          />
          <button
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
            className="cursor-pointer"
          >
            <GiHamburgerMenu size={40} />
          </button>
        </div>

        {/* Dropdown Links */}
        <ul
          className={`flex flex-col gap-3 w-full items-center mt-6 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={toggleDropdown}
              className="hover:text-primaryRed"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleDropdown}
              className="hover:text-primaryRed"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={toggleDropdown}
              className="hover:text-primaryRed"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleDropdown}
              className="hover:text-primaryRed"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <nav
        className="w-[60%] scale-75 max-md:hidden"
        aria-label="Desktop Navigation"
      >
        <div
          className={`flex ${
            path === "/" || path === "/product" ? "bg-white" : "bg-primaryRed"
          } items-center py-[2px] justify-between px-[12px] transition-all duration-200`}
        >
          <img
            src={path === "/" || path === "/product" ? Logo : LogoWhite}
            alt="Naalvar Logo"
            className="w-[60px]"
          />

          <ul className="flex text-[20px] gap-[48px] items-center">
            <li className="relative group">
              <Link
                to="/about"
                className={`relative ${
                  path === "/about" ? "text-[32px] text-white" : ""
                }`}
              >
                About
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 ${
                    path === "/" || path === "/product"
                      ? "bg-primaryRed"
                      : "bg-white"
                  } group-hover:w-full transition-all duration-500 ease-in-out`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/"
                className={`relative ${
                  path === "/" ? "text-[32px] text-primaryRed" : ""
                }`}
              >
                Home
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 ${
                    path === "/" || path === "/product"
                      ? "bg-primaryRed"
                      : "bg-white"
                  } group-hover:w-full transition-all duration-500 ease-in-out`}
                ></span>
              </Link>
            </li>

            <li className="relative group">
              <Link
                to="/product"
                className={`${
                  path === "/product" ? "text-[32px] text-primaryRed" : ""
                } relative`}
              >
                Shop
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 ${
                    path === "/" || path === "/product"
                      ? "bg-primaryRed"
                      : "bg-white"
                  } group-hover:w-full transition-all duration-500 ease-in-out`}
                ></span>
              </Link>
            </li>
          </ul>

          <Link to="/contact">
            <button
              className="bg-primaryBlack rounded-[8px] px-[16.5px] py-[7px] text-[#FEFEFE]"
              aria-label="Contact Page"
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Bottom Banner */}
        <div
          className={`flex flex-row items-center py-[2px] justify-center gap-[8px] ${
            path === "/" || path === "/product"
              ? "bg-primaryRed"
              : "bg-primaryBlack"
          } text-white transition-all duration-200`}
        >
          <p className="text-[14px]">Service and Quality Guaranteed</p>
          <img
            src={Guarantee}
            alt="Quality Guarantee Badge"
            className="max-w-[25px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
