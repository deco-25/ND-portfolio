import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { BsPerson } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center gap-[100px] font-poppins w-screen">
      <div className="flex w-full justify-between px-[62px]">
        <div>
          <h1 className="text-[64px] font-semibold text-primaryBlue">
            Testimonials
          </h1>
        </div>
        <div className="flex gap-[20px] items-center">
          <button className=" rounded-full p-2">
            <ArrowLeft size={32} />
          </button>
          <button className="bg-primaryBlue rounded-full p-2">
            <ArrowRight size={32} className="text-white" />
          </button>
        </div>
      </div>
      {/*Testimonials*/}
      <div className="flex w-screen justify-around">
        {Array.from({ length: 3 }).map((ele, ind) => {
          return (
            <div className="bg-[#C2C2BA] p-[40px] flex flex-col gap-[20px] w-fit rounded-[24px]">
              <div className="flex gap-[8px]">
                <div className="bg-primaryBlack rounded-full p-2 text-white">
                  <BsPerson size={32} />
                </div>
                <div>
                  <h1>Annette Black</h1>
                  <h1 className="text-[14px] text-[#7534FF]">Group 1 PCM</h1>
                </div>
              </div>
              <div>
                <h1 className=" max-w-[340px] text-justify leading-[26px]">
                  “Golio is one of the BEST web designers I've ever worked with
                  professionally. I service, work ethic, and attention to
                  detail. ”
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
