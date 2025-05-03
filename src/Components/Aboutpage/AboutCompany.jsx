import React from "react";
import { Logo } from "../../assets/index";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const AboutCompany = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section
      className="flex pt-[100px] flex-col min-h-screen w-screen justify-center items-center px-[7.5vw] gap-[20px] font-poppins"
      aria-labelledby="about-heading"
    >
      {/* Company Logo */}
      <div>
        <img
          id="comp-img"
          src={Logo}
          alt="Naalvar Diagnostics Drugs Logo"
          className="max-w-[300px] max-md:max-w-[200px]"
        />
      </div>

      {/* Company Description */}
      <article className="text-justify">
        <h2 id="about-heading" className="sr-only">
          About Naalvar Diagnostics Drugs
        </h2>
        <p data-aos-once="true" data-aos="fade-up">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <strong>NAALVAR DIAGNOSTICS DRUGS</strong> was established in 2021,
          under the leadership of a qualified pharmacist with over 20 years of
          experience in pharma production. We specialize exclusively in the
          production of medicated toiletry soap formulations. Our operations
          began in February 2021 and include planning, designing, procurement of
          raw and packing materials, as well as the storage of active
          pharmaceutical ingredients at appropriate temperatures. We handle
          testing, manufacturing, and final release of finished products for
          distribution across India. A well-documented manufacturing and testing
          process is followed at every stage, adhering strictly to{" "}
          <abbr title="Current Good Manufacturing Practice">cGMP</abbr>{" "}
          guidelines.
        </p>
      </article>
    </section>
  );
};

export default AboutCompany;
