import React from "react";

const Quality = () => {
  return (
    <div className="flex  w-screen md:min-h-screen px-[7.5vw] max-md:flex-col-reverse max-md:py-20">
      <div className="w-[50%] max-md:w-full leading-[150%] flex flex-col  justify-center gap-[20px] max-md:py-5">
        <p className="text-justify ">
          {" "}
          At NAALVAR DIAGNOSTICS DRUGS, quality is not just a promise—it’s a
          guarantee. We adhere to strict quality control measures and conduct
          regular testing to ensure our products meet the highest standards of
          safety and performance. Our state-of-the-art manufacturing facilities
          are compliant with all regulatory requirements, including Good
          Manufacturing Practice (GMP) standards.
        </p>
        <p>
          Each batch of soap undergoes meticulous quality checks, and our
          products are dermatologically tested to ensure they are safe and
          suitable for all skin types.
        </p>
      </div>
      <div className="flex md:justify-end items-center md:w-[50%] max-md:text-center ">
        <h1 className="md:text-end text-[64px] font-bold text-primaryRed max-md:text-[40px] ">
          Our{" "}
          <span className="max-md:hidden">
            <br />
          </span>{" "}
          Commitment{" "}
          <span className="max-md:hidden">
            <br />
          </span>{" "}
          to Quality
        </h1>
      </div>
    </div>
  );
};

export default Quality;
