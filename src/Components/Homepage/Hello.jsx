import React from "react";
import { Arrow } from "../../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hello = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hello-container",
        start: "bottom-=200 bottom",
      },
    });

    tl.from("#bar-1", { x: -700, duration: 1 }, 0.5).from(
      "#bar-2",
      { x: 700, duration: 1 },
      0.5
    );
  });

  useGSAP(() => {
    const mobile1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#mob-div1",
        start: "bottom bottom",
      },
    });
    const mobile2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#mob-div2",
        start: "bottom bottom",
      },
    });
    mobile1.from("#bar-m-1", { x: -700, duration: 1 }, 0);
    mobile2.from("#bar-m-2", { x: 700, duration: 1 }, 0);


    gsap.from("#hello-para-1", {
      y: 50, 
      opacity: 0.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#hello-para-1",
      }
    })
    gsap.from("#hello-para-2", {
      y: 50, 
      opacity: 0.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#hello-para-2", 
      }
    })
  });

  return (
    <main
      id="hello-container"
      className="min-h-screen w-screen flex flex-col py-20 gap-20 max-md:gap-12 justify-around"
    >
      {/* Section: Who We Are */}
      <section className="flex w-screen items-center max-md:flex-col">
        <div
          id="mob-div1"
          className="md:w-[50%] w-full leading-[85px] max-md:leading-[60px] flex flex-col justify-start gap-[20px]"
        >
          <div className="px-[7.5vw]">
            <h2 className="text-[96px] max-md:text-[64px] font-semibold">
              Hello.
            </h2>
            <h3 className="text-[64px] max-md:text-[48px] font-semibold">
              Who we are?
            </h3>
          </div>
          <div
            id="bar-1"
            className="w-[80%] max-md:hidden h-[22px] max-md:h-[12px] bg-primaryBlack"
          />
          <div
            id="bar-m-1"
            className="w-[80%] md:hidden h-[22px] max-md:h-[12px] bg-primaryBlack"
          />
        </div>

        <article className="md:w-[50%] max-md:hidden flex flex-col gap-[20px] justify-center max-md:p-10 para">
          <p
            className="text-justify md:max-w-[677px] md:mr-[7.5vw]"
            id="hello-para-1"
          >
            Welcome to <strong>NAALVAR DIAGNOSTICS DRUGS</strong>, where
            innovation meets care in every bar of soap. We are a leading
            pharmaceutical soap manufacturer dedicated to delivering products
            that not only cleanse but also promote the health and well-being of
            our users. With years of research, development, and expertise, we
            combine the best of nature and science to create soaps that cater to
            sensitive skin, prevent infections, and maintain overall skin
            hygiene.
          </p>
          <Link to="/about">
            <button
              aria-label="Learn more about us"
              className="group w-fit flex gap-[12px] items-center font-semibold text-white py-[6px] px-[16px] rounded-full bg-primaryBlack"
            >
              Get to know us{" "}
              <img
                src={Arrow}
                alt="Arrow pointing right"
                className="group-hover:translate-x-2 duration-500"
              />
            </button>
          </Link>
        </article>

        <article className="md:w-[50%] md:hidden flex flex-col gap-[20px] justify-center max-md:p-10 para1">
          <p
            className="text-justify md:max-w-[677px] md:mr-[7.5vw]"
            id="hello-para-1"
          >
            Welcome to <strong>NAALVAR DIAGNOSTICS DRUGS</strong>, where
            innovation meets care in every bar of soap. We are a leading
            pharmaceutical soap manufacturer dedicated to delivering products
            that not only cleanse but also promote the health and well-being of
            our users. With years of research, development, and expertise, we
            combine the best of nature and science to create soaps that cater to
            sensitive skin, prevent infections, and maintain overall skin
            hygiene.
          </p>
          <button
            aria-label="Learn more about us"
            className="w-fit flex gap-[12px] items-center font-semibold text-white py-[6px] px-[16px] rounded-full bg-primaryBlack"
          >
            Get to know us
            <img src={Arrow} alt="Arrow icon" />
          </button>
        </article>
      </section>

      {/* Section: Our Mission */}
      <section className="flex w-screen md:items-center max-md:flex-col-reverse">
        <article
          id="mob-div2"
          className="md:w-[50%] para flex flex-col gap-[20px] justify-end max-md:p-[40px]"
        >
          <p
            className="text-justify md:max-w-[720px] md:pl-[7.5vw] hello-para"
            id="hello-para-1"
          >
            At <strong>NAALVAR DIAGNOSTICS DRUGS</strong>, our mission is simple
            – to provide high-quality pharmaceutical soaps that improve skin
            health and hygiene while ensuring safety and effectiveness. We
            believe in the power of daily hygiene routines to reduce the risk of
            skin infections, irritations, and other dermatological issues. Our
            soaps are formulated with the highest standards of care to help you
            maintain clean, healthy, and balanced skin every day.
          </p>
        </article>

        <div className="md:w-[50%] w-screen leading-[85px] flex flex-col md:items-end">
          <div className="md:w-[80%] w-full flex flex-col gap-[20px]">
            <div className="flex justify-end max-md:justify-start md:px-[7.5vw] w-full max-md:px-[50px]">
              <h3 className="text-[64px] max-md:text-[48px] font-semibold">
                Our Mission
              </h3>
            </div>
            <div
              id="bar-2"
              className="w-full max-md:hidden h-[22px] bg-primaryBlack max-md:w-[80%]  max-md:h-[12px]"
            />
            <div
              id="bar-m-2"
              className="w-full md:hidden h-[22px] bg-primaryBlack max-md:w-[80%]  max-md:h-[12px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hello;
