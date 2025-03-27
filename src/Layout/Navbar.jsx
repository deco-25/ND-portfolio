import React from "react";
import { Guarantee, Logo } from "../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-screen flex justify-center mx-auto top-[20px] z-[100]">
      <div className="w-[80%]">
        <div className="flex bg-white items-center py-[2px] justify-between px-[12px]">
          <div>
            <img src={Logo} alt="" className="w-[60px]" />
          </div>
          <div>
            <nav className="flex text-[20px] gap-[48px] items-center">
              <ul>About</ul>
              <ul className="text-[32px] underline text-primaryRed">Home</ul>
              <NavLink to={'/shop'}>Shop</NavLink>
            </nav>
          </div>
          <div className="bg-primaryBlack rounded-[8px] px-[16.5px] py-[7px] text-[#FEFEFE]">
            <a href="/contact">
              <button>Contact</button>
            </a>
          </div>
        </div>
        <div
          className={`flex flex-row items-center py-[2px] justify-center gap-[8px] bg-primaryRed text-white`}
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
