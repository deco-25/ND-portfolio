import React from "react";
import { Soap2 } from "../../assets";
import { TreeDeciduous } from "lucide-react";

const Apart = () => {
  const USP = [
    "Pharmaceutical Grade Formulas",
    "Skin Sensitivity Focus",
    "Scientifically-Backed Ingredients",
    "Environmental Responsibility",
    "Customer-Centric Approach",
  ];

  return (
    <div className="font-poppins">
      <div>
        <img
          src={Soap2}
          alt=""
          className="w-screen max-h-[596px] object-cover"
        />
      </div>
      {/* Sets Us Apart */}
      <div className="relative min-h-screen flex justify-center items-center">
        {/*Scale pattern */}
        <div className="flex justify-center absolute top-0">
          <div className="flex gap-[16px]">
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <div className="flex gap-[16px]">
                  <div className="h-[94px] min-w-[2px] max-w-[1.25px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                  <div className="h-[78px] min-w-[1px] max-w-[1px] bg-primaryRed" />
                </div>
              );
            })}
          </div>
        </div>
        {/*Main Content */}
        <div className="flex flex-col justify-center items-center pb-20 gap-[20px]">
          <div>
            <h1 className="text-[64px] text-primaryRed">What Sets Us Apart</h1>
          </div>
          <div className="flex justify-around w-screen">
            {USP.map((ele, ind) => {
              return (
                <div
                  className={`flex flex-col gap-[20px] px-[40px] py-[35px] shadow-xl w-fit rounded-[12px] ${
                    ind % 2 == 0 ? "" : "translate-y-8"
                  }`}
                >
                  <div
                    className={`${
                      ind % 2 == 0 ? "bg-primaryBlue" : "bg-primaryRed"
                    } w-fit flex justify-center items-center p-4 rounded-[8px]`}
                  >
                    <TreeDeciduous size={32} className="text-white" />
                  </div>
                  <div className="max-w-[140px] text-[14px] font-semibold">
                    {ele}
                  </div>
                  <div
                    className={`min-w-[50px] max-w-[50px] h-[2px] bg-primaryBlue`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom strips */}
        <div className="absolute bottom-0 left-0 right-0 min-h-[20vh] w-screen z-[20]">
          <div className="w-full min-h-[10vh] flex">
            <div className="min-w-[70%] bg-primaryRed" />
            <div className="min-w-[30%]"></div>
          </div>
          <div className="w-full min-h-[10vh] flex">
            <div className="min-w-[70%]" />
            <div className="min-w-[30%] bg-primaryRed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
