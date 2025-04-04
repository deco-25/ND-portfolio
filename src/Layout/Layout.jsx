import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#FEFFE4]">
      <Navbar />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
