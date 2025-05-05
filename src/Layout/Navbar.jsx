import React, { useEffect, useRef, useState } from "react";
import { Guarantee, Logo, LogoWhite } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

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
  const [isProductOpen, setIsProductOpen] = useState(false);
  
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const productDropdownRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  const toggleDropdown = () => {
    // No rotation on hamburger icon as requested
    setIsOpen(!isOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductOpen(prev => !prev);
  };

  useEffect(() => {
    setPath(location.pathname);

    if (
      location.pathname === "/product" ||
      location.pathname.startsWith("/product/")
    ) {
      setActiveIndex(2); // Shop
    } else {
      const currentIndex = NAV_ITEMS.findIndex(
        (item) => item.path === location.pathname
      );
      if (currentIndex !== -1) setActiveIndex(currentIndex);
    }
  }, [location.pathname]);
  
  // Main mobile dropdown animation
  useEffect(() => {
    if (navRef.current && dropdownRef.current) {
      if (isOpen) {
        // Opening animation
        gsap.to(navRef.current, {
          height: "auto",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          duration: 0.4,
          ease: "power3.out",
        });
        
        // Animate individual menu items with staggered reveal
        gsap.fromTo(
          dropdownRef.current.children,
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.05, 
            duration: 0.6,
            delay: 0.1,
            ease: "back.out(1.2)" 
          }
        );
        
        gsap.to(dropdownRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
        });
      } else {
        // Closing animation
        gsap.to(dropdownRef.current.children, {
          y: -10,
          opacity: 0,
          stagger: 0.03,
          duration: 0.3,
          ease: "power2.in"
        });
        
        gsap.to(dropdownRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
        
        gsap.to(navRef.current, {
          height: "55px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          duration: 0.4,
          delay: 0.1,
          ease: "power3.inOut",
        });
      }
    }
  }, [isOpen]);

  // Products submenu animation with simpler approach
  useEffect(() => {
    if (productDropdownRef.current && isProductOpen) {
      // Animate items with a simple fade in and slide
      gsap.fromTo(
        productDropdownRef.current.children,
        { 
          y: -10, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.06, 
          duration: 0.3,
          ease: "power1.out" 
        }
      );
    }
  }, [isProductOpen]);

  // Adjusted function to rotate items while keeping the active one in the center
  const getRotatedItems = () => {
    const newArr = [...NAV_ITEMS];
    if (activeIndex === 0) {
      // Move last item to front
      return [newArr[1], newArr[0], newArr[2]];
    } else if (activeIndex === 2) {
      // Move first item to end
      return [newArr[1], newArr[2], newArr[0]];
    }
    return newArr; // activeIndex === 1 (middle item)
  };

  const rotatedItems = getRotatedItems();

  return (
    <header className="absolute w-screen flex flex-col justify-center items-center mx-auto top-[20px] md:top-[1px] z-[100] transition-all duration-200">
      {/* Mobile Navbar */}
      <nav
        ref={navRef}
        className={`overflow-hidden md:hidden rounded-xl flex flex-col items-center px-[5vw] transition-all ease-in-out ${
          path === "/" || path.startsWith("/product/")
            ? "bg-white text-primaryRed"
            : "bg-primaryRed text-white"
        } w-[90%]`}
        aria-label="Mobile Navigation"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center h-full w-full">
          <img
            src={path === "/" || path.startsWith("/product") ? Logo : LogoWhite}
            className="w-[50px]"
            alt="Naalvar Logo"
          />
          <button
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
            className="cursor-pointer"
          >
            <div ref={hamburgerRef}>
              <GiHamburgerMenu size={40} />
            </div>
          </button>
        </div>

        {/* Dropdown Links */}
        <ul
          ref={dropdownRef}
          className="flex flex-col gap-3 w-full items-center mt-6 opacity-0 pointer-events-none"
        >
          <li>
            <Link
              to="/"
              onClick={toggleDropdown}
              className={`hover:text-primaryBlue ${path.startsWith('/') && path === "/" && "border-b-2 border-primaryRed pb-1"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleDropdown}
              className={`hover:text-primaryBlue ${path.startsWith('/about') && "border-b-2 border-white pb-1"}`}
            >
              About
            </Link>
          </li>

          {/* Products Dropdown */}
          <li className="relative w-full flex flex-col items-center">
            <button
              onClick={toggleProductDropdown}
              className="hover:text-primaryBlue focus:outline-none flex gap-2 items-center"
            >
              Products{" "}
              <div
                className={`transition-transform duration-300 ${
                  isProductOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </div>
            </button>

            {/* Using conditional rendering instead of display:none for better compatibility with GSAP */}
            {isProductOpen && (
              <ul 
                ref={productDropdownRef}
                className="flex flex-col w-[40%] text-primaryRed rounded-lg mt-2"
              >
                <li>
                  <Link
                    to="/product/antibacterial"
                    onClick={() => {
                      toggleProductDropdown();
                      toggleDropdown();
                    }}
                    className={`block px-4 py-1 hover:bg-gray-200 border-l-4 rounded-lg ${
                      path.startsWith('/product/antibacterial') 
                        ? "bg-primaryRed text-white hover:bg-red-600" 
                        : "bg-gray-100"
                    } ${
                      (path.startsWith('/contact') || path.startsWith('/about')) 
                        ? "border-red-300" 
                        : "border-primaryRed"
                    }`}
                  >
                    Antibacterial
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/product/veterinary"
                    onClick={() => {
                      toggleProductDropdown();
                      toggleDropdown();
                    }}
                    className={`block px-4 py-1 hover:bg-gray-200 border-l-4 rounded-lg ${
                      path.startsWith('/product/veterinary') 
                        ? "bg-primaryRed text-white hover:bg-red-600" 
                        : "bg-gray-100"
                    } ${
                      (path.startsWith('/contact') || path.startsWith('/about')) 
                        ? "border-red-300" 
                        : "border-primaryRed"
                    }`}
                  >
                    Veterinary
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/product/showAll"
                    onClick={() => {
                      toggleProductDropdown();
                      toggleDropdown();
                    }}
                    className={`block px-4 py-1 hover:bg-gray-200 border-l-4 rounded-lg ${
                      path.startsWith('/product/showAll') 
                        ? "bg-primaryRed text-white hover:bg-red-600" 
                        : "bg-gray-100"
                    } ${
                      (path.startsWith('/contact') || path.startsWith('/about')) 
                        ? "border-red-300" 
                        : "border-primaryRed"
                    }`}
                  >
                    Show All
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              onClick={toggleDropdown}
              className={`hover:text-primaryBlue px-1 ${path.startsWith('/contact') && "border-b-2 border-white pb-1"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <nav
        className="w-[60%] scale-75 max-md:hidden rounded-xl"
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
              src={
                path === "/" || path.startsWith("/product/") ? Logo : LogoWhite
              }
              alt="Naalvar Logo"
              className="w-[70px]"
            />
          </a>

          <nav className="w-full flex justify-center items-center py-3">
            <ul className="flex gap-[64px] transition-all duration-700">
              {rotatedItems.map((item, idx) => {
                const isActive = idx === 1 && !(path.startsWith("/contact"));
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
                            ? path === "/" || (path.startsWith("/product/"))
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