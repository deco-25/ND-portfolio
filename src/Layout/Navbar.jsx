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
    console.log(location.pathname);
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="absolute w-screen flex flex-col justify-center items-center mx-auto top-[20px] z-[100] transition-all duration-200">
      <div
        className={`overflow-hidden flex flex-col items-center px-[5vw] rounded-3xl transition-all duration-500 ease-in-out ${
          path === "/" || path === "/product"
            ? "bg-white text-primaryRed"
            : "bg-primaryRed text-white"
        } w-[90%] ${isOpen ? "py-6 h-[250px]" : "py-2 h-[55px]"}`}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center w-full">
          <img
            src={path === "/" || path === "/product" ? Logo : LogoWhite}
            className="w-[50px]"
            alt="Logo"
          />
          <div onClick={toggleDropdown} className="cursor-pointer">
            <GiHamburgerMenu size={40} />
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`flex flex-col gap-3 w-full items-center mt-6 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${
            path === "/" || path === "/product"
              ? "bg-white text-primaryRed"
              : "bg-primaryRed text-white"
          } `}
        >
          <Link to="/" onClick={toggleDropdown}>
            <a href="#" className="hover:text-primaryRed">
              Home
            </a>
          </Link>
          <Link to="/about" onClick={toggleDropdown}>
            <a href="#" className="hover:text-primaryRed">
              About
            </a>
          </Link>
          <Link to="/product" onClick={toggleDropdown}>
            <a href="#" className="hover:text-primaryRed">
              Products
            </a>
          </Link>
          <Link to="/contact" onClick={toggleDropdown}>
            <a href="#" className="hover:text-primaryRed">
              Contact
            </a>
          </Link>
        </div>
      </div>
      <div
        className="w-[60%] scale-75 max-md:hidden
      "
      >
        <div
          className={`flex ${
            path === "/" || path === "/product" ? "bg-white" : "bg-primaryRed"
          } items-center py-[2px] justify-between px-[12px] transition-all duration-200`}
        >
          <div>
            <img
              src={path === "/" || path === "/product" ? Logo : LogoWhite}
              alt=""
              className="w-[60px]"
            />
          </div>
          <div>
            <nav className="flex text-[20px] gap-[48px] items-center">
              <Link to="/about">
                <ul
                  className={`${
                    path === "/about"
                      ? "text-[32px] hover:underline text-white"
                      : ""
                  }`}
                >
                  About
                </ul>
              </Link>
              <Link to="/">
                <ul
                  className={`${
                    path === "/"
                      ? "text-[32px] hover:underline text-primaryRed"
                      : ""
                  }`}
                >
                  Home
                </ul>
              </Link>
              <Link to="/product">
                <ul
                  className={`${
                    path === "/product"
                      ? "text-[32px] hover:underline text-primaryRed"
                      : ""
                  }`}
                >
                  Shop
                </ul>
              </Link>
            </nav>
          </div>
          <div className="bg-primaryBlack rounded-[8px] px-[16.5px] py-[7px] text-[#FEFEFE]">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-row items-center py-[2px] justify-center gap-[8px] ${
            path === "/" || path === "/product"
              ? "bg-primaryRed"
              : "bg-primaryBlack"
          } text-white transition-all duration-200`}
        >
          <div>
            <h1 className="text-[14px]">Service and Quality Guaranteed</h1>
          </div>
          <div>
            <img src={Guarantee} alt="" className="max-w-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
