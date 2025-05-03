import React, { useEffect, useState } from "react";
import { Guarantee, Logo, LogoWhite } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NAV_ITEMS = [
  { name: "About", path: "/about" },
  { name: "Home", path: "/" },
  { name: "Shop", path: "/product/showAll" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(1); // Default to Home
  const [path, setPath] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    setPath(location.pathname);
    const currentIndex = NAV_ITEMS.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname]);

  // Rotate the array so active item is always in the middle (index 1)
  const getRotatedItems = () => {
    const newArr = [...NAV_ITEMS];
    if (activeIndex === 0) {
      // Move last item to front
      return [newArr[1], newArr[0], newArr[2]];
    } else if (activeIndex === 2) {
      // Move first item to end
      return [newArr[1], newArr[2], newArr[0]];
    }
    return newArr; // activeIndex === 1
  };

  const rotatedItems = getRotatedItems();

  return (
    <header className="absolute w-screen flex flex-col justify-center items-center mx-auto top-[20px] md:top-[1px] z-[100] transition-all duration-200">
      {/* Mobile Navbar */}
      <nav
        className={`overflow-hidden md:hidden rounded-xl flex flex-col items-center px-[5vw] transition-all duration-500 ease-in-out ${
          path === "/" || path.startsWith("/product/")
            ? "bg-white text-primaryRed"
            : "bg-primaryRed text-white"
        } w-[90%] ${isOpen ? "py-6 h-[250px]" : "py-2 h-[55px]"}`}
        aria-label="Mobile Navigation"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center w-full">
          <img
            src={
              path === "/" || path.startsWith("/product/") ? Logo : LogoWhite
            }
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
              className="hover:text-primaryBlue"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleDropdown}
              className="hover:text-primaryBlue"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={toggleDropdown}
              className="hover:text-primaryBlue"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleDropdown}
              className="hover:text-primaryBlue"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <nav
        className="w-[60%] scale-75 max-md:hidden rounded-xl "
        aria-label="Desktop Navigation"
      >
        <div
          className={`flex ${
            path === "/" || path.startsWith("/product/")
              ? "bg-white"
              : "bg-primaryRed"
          } items-center py-[2px] justify-between px-[12px] transition-all duration-200 h-fit`}
        >
          <a href="/">
            <img
              src={path === "/" || path === "/product" ? Logo : LogoWhite}
              alt="Naalvar Logo"
              className="w-[70px]"
            />
          </a>

          <nav className="w-full flex justify-center items-center py-3">
            <ul className="flex gap-[64px] transition-all duration-700">
              {rotatedItems.map((item, idx) => {
                const isActive = idx === 1;
                const isShop = item.name === "Shop";
                return (
                  <li
                    key={item.path}
                    className={`relative group transition-all duration-500 ease-in-out ${
                      isActive
                        ? "z-10 scale-125 opacity-100 translate-y-0"
                        : " scale-100 translate-y-2"
                    }`}
                  >
                    <div className="relative z-20">
                      <Link
                        to={item.path}
                        className={`relative text-[20px] transition-all duration-500 ease-in-out ${
                          isActive
                            ? path === "/" || path.startsWith("/product/")
                              ? "text-[32px] text-black font-semibold"
                              : "text-[32px] text-white font-semibold"
                            : "text-black"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center h-[40px]">
                          {item.name}
                        </span>
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-500 ease-in-out
        ${path === item.path ? "w-full" : "w-0"}
        ${
          path === "/" || path.startsWith("/product/")
            ? "bg-primaryRed"
            : "bg-white"
        }
        group-hover:w-full`}
                        />
                      </Link>
                    </div>

                    {/* Dropdown for Shop */}
                    {isShop && (
                      <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[180px] bg-white text-black shadow-xl rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/product/antibacterial">Antibacterial</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/product/veterinary">Veterinary</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/product/showAll">Show All</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link to="/contact">
            <button
              className="bg-primaryBlack rounded-[8px] px-[16.5px] pt-[6px] pb-[7px] flex item-center text-center text-[#FEFEFE]"
              aria-label="Contact Page"
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Bottom Banner */}
        <div
          className={`flex flex-row items-center py-[2px] justify-center gap-[8px] ${
            path === "/" || path.startsWith("/product/")
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
