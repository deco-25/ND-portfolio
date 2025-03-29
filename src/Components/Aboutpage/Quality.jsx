import React from "react";

const Quality = () => {
  return (
    <div className="flex  w-screen min-h-screen">
      <div className="w-[50%] leading-[150%] text-[18px] pl-[128px] flex flex-col justify-center gap-[20px]">
        <p className="text-justify ">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At NAALVAR DIAGNOSTICS DRUGS,
          quality is not just a promise—it’s a guarantee. We adhere to strict
          quality control measures and conduct regular testing to ensure our
          products meet the highest standards of safety and performance. Our
          state-of-the-art manufacturing facilities are compliant with all
          regulatory requirements, including Good Manufacturing Practice (GMP)
          standards.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each batch of soap undergoes
          meticulous quality checks, and our products are dermatologically
          tested to ensure they are safe and suitable for all skin types.
        </p>
      </div>
      <div className="flex justify-center items-center w-[50%] ">
        <h1 className="text-end text-[64px] font-bold text-primaryRed">
          Our <br /> Commitment <br /> to Quality
        </h1>
      </div>
    </div>
  );
};

export default Quality;
