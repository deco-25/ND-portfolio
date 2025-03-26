import React from "react";
import { Arrow } from "../../assets";

const Hello = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col py-20 gap-20 justify-around">
      {/*Who we are*/}
      <div className="flex w-screen items-center">
        <div className="w-[50%] leading-[85px] flex flex-col gap-[20px]">
          <div className="px-[50px]">
            <h1 className="text-[96px] font-semibold">Hello.</h1>
            <h1 className="text-[64px] font-semibold">Who we are?</h1>
          </div>
          <div className="w-[80%] h-[22px] bg-primaryBlack" />
        </div>
        <div className="w-[50%] flex flex-col gap-[20px] justify-center">
          <p className="text-justify max-w-[677px]">
            Welcome to NAALVAR DIAGNOSTICS DRUGS, where innovation meets care in
            every bar of soap. We are a leading pharmaceutical soap manufacturer
            dedicated to delivering products that not only cleanse but also
            promote the health and well-being of our users. With years of
            research, development, and expertise, we combine the best of nature
            and science to create soaps that cater to sensitive skin, prevent
            infections, and maintain overall skin hygiene.
          </p>
          <button className=" w-fit flex gap-[12px] items-center font-semibold text-white py-[6px] px-[16px] rounded-full bg-primaryBlack">
            Get to know us <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
      {/*Our Mission*/}
      <div className="flex w-screen items-center">
        <div className="w-[60%] flex flex-col gap-[20px] justify-center">
          <p className="text-justify max-w-[720px] pl-[100px]">
            At NAALVAR DIAGNOSTICS DRUGS, our mission is simple – to provide
            high-quality pharmaceutical soaps that improve skin health and
            hygiene while ensuring safety and effectiveness. We believe in the
            power of daily hygiene routines to reduce the risk of skin
            infections, irritations, and other dermatological issues. Our soaps
            are formulated with the highest standards of care to help you
            maintain clean, healthy, and balanced skin every day.
          </p>
        </div>
        <div className="w-[40%] leading-[85px] flex flex-col items-end ">
          <div className="w-[80%] flex flex-col gap-[20px]">
            <div className="flex items-start w-full">
              <h1 className="text-[64px] font-semibold">Our Mission</h1>
            </div>
            <div className="w-full h-[22px] bg-primaryBlack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
