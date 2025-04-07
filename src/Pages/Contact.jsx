import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  useGSAP(() => {
    const subBtn = gsap.timeline({});
    subBtn
      .from(".title", {
        x: "-50vw",
        duration: 0.5,
      })
      .from("#submit-button", {
        x: "70vw",
        opacity: 0,
        duration: 1,
      });
  });

  return (
    <>
      <div className="flex pt-[100px] max-md:flex-col gap-10 w-screen md:max-h-[67vh] mb-5 md:my-32 px-[7.5vw] font-poppins">
        <section className="flex flex-1 flex-col gap-5 ">
          <h1 className="text-primaryRed text-5xl font-bold title">
            Contact Us
          </h1>
          <p className="font-semibold text-black/50">
            Reach Out – Fresh, Natural Care is Just a Message Away!
          </p>
          <p className="font-[500] text-justify max-md:text-sm">
            Have questions or want to learn more about our handcrafted soap
            products? Our friendly and knowledgeable customer service team is
            here to help. Contact us today, and we’ll be happy to assist you
            with product recommendations, skincare tips, or any other inquiries
            you may have. Your satisfaction is our priority!
          </p>
        </section>

        <section className="flex-1">
          <form className="flex flex-col gap-8">
            <div className="flex gap-12 max-md:gap-6">
              <div className="flex-1 w-[50%]">
                <label
                  htmlFor="first-name"
                  className="mb-2 block w-full font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Jane"
                  className="rounded-lg bg-white border-2 p-2 w-full"
                />
              </div>

              <div className="flex-1 w-[50%]">
                <label
                  htmlFor="last-name"
                  className="mb-2 block w-full font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Smitherton"
                  className="rounded-lg bg-white border-2 p-2 w-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <label
                htmlFor="email-address"
                className="mb-2 block w-full font-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                placeholder="email@janesfakedomain.net"
                className="rounded-lg bg-white border-2 p-2 w-full"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="email-address"
                className="mb-2 block w-full font-semibold"
              >
                Your message
              </label>
              <textarea
                rows={5}
                id="email-address"
                placeholder="Enter your question or message"
                className="rounded-lg bg-white border-2 p-2 w-full"
              />
            </div>

            <button
              id="submit-button"
              className="w-full rounded-lg bg-primaryRed text-white py-3 text-lg"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
