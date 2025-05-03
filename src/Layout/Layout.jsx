import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Whatsapp } from "../assets";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[9999] bg-white rounded-full">
        <img src={Whatsapp} alt="" className="w-[50px] md:w-[60px]" />
      </div>
      <Navbar />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
