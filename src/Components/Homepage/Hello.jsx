import React from "react";
import { Arrow } from "../../assets";

const Hello = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col py-20 gap-20 max-md:gap-12 justify-around">
      {/*Who we are*/}
      <div className="flex w-screen items-center max-md:flex-col">
        <div className="md:w-[50%] leading-[85px] max-md:leading-[60px] flex flex-col gap-[20px]">
          <div className="px-[100px]">
            <h1 className="text-[96px] max-md:text-[64px] font-semibold">
              Hello.
            </h1>
            <h1 className="text-[64px] max-md:text-[48px] font-semibold">
              Who we are?
            </h1>
          </div>
          <div className="w-[80%] h-[22px] max-md:h-[12px] bg-primaryBlack" />
        </div>
        <div className="md:w-[50%] flex flex-col gap-[20px] justify-center max-md:p-[40px]">
          <p className="text-justify md:max-w-[677px] mr-[100px]">
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
      <div className="flex w-screen md:items-center max-md:flex-col-reverse">
        <div className="md:w-[50%] flex flex-col gap-[20px] justify-end max-md:p-[40px]">
          <p className="text-justify md:max-w-[720px] md:pl-[100px]">
            At NAALVAR DIAGNOSTICS DRUGS, our mission is simple – to provide
            high-quality pharmaceutical soaps that improve skin health and
            hygiene while ensuring safety and effectiveness. We believe in the
            power of daily hygiene routines to reduce the risk of skin
            infections, irritations, and other dermatological issues. Our soaps
            are formulated with the highest standards of care to help you
            maintain clean, healthy, and balanced skin every day.
          </p>
        </div>
        <div className="md:w-[50%] leading-[85px] flex flex-col md:items-end ">
          <div className="md:w-[80%] flex flex-col gap-[20px]">
            <div className="flex items-start w-full max-md:px-[50px]">
              <h1 className="text-[64px] max-md:text-[48px] font-semibold">
                Our Mission
              </h1>
            </div>
            <div className="w-full h-[22px] bg-primaryBlack max-md:w-[80%]  max-md:h-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
