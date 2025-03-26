import React from "react";

const Licensed = () => {
  return (
    <div className="bg-primaryRed text-white min-h-screen flex justify-center items-center px-[150px] font-poppins text-justify relative">
      <div className="absolute top-0 left-0 right-0 min-h-[20vh] w-screen z-[20]">
        <div className="w-full min-h-[10vh] flex">
          <div className="min-w-[70%] bg-primaryBlack" />
          <div className="min-w-[30%] bg-[#FEFFE4]"></div>
        </div>
        <div className="w-full min-h-[10vh] flex">
          <div className="min-w-[70%] bg-primaryRed" />
          <div className="min-w-[30%] bg-primaryBlack"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <h1 className="text-center text-[64px] font-semibold">
          Licensed Activities
        </h1>
        <p>
          Site is licensed to manufacture Medicated toiletry soap. The Central
          Drugs Standard Control Organization (CDSCO) and Government of Tamil
          Nadu has approved the manufacturing facility. We are authorized to
          manufacture the pharmaceutical products in various dosage forms like
          soap and cream which are nontoxic or non hazardous substances. The
          formulations manufactured at this site are for “human and veterinary
          use only”. The products manufactured are generic and branded
          proprietary preparation with upholding total quality management
          systems. Location of the site: Factory is located in a pollution free
          atmosphere near Poothurai village, Tamil Nadu, and is equipped with
          all required infrastructure for the manufacturing testing and all
          related activities.
        </p>
      </div>
    </div>
  );
};

export default Licensed;
