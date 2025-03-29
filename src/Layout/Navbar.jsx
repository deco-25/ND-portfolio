import React, { useEffect, useState } from "react";
import { Guarantee, Logo, LogoWhite } from "../assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    console.log(location.pathname);
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="absolute w-screen flex justify-center mx-auto top-[20px] z-[100] transition-all duration-200">
      <div
        className="w-[60%] scale-75
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
