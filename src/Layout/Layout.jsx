import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Whatsapp } from "../assets";

const Layout = () => {
  return (
    <div className="min-h-screen relative flex flex-col relative">
      <div className="fixed bottom-10 right-10 z-[9999] bg-white rounded-full">
        <img src={Whatsapp} alt="" className="w-[60px]" />
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
