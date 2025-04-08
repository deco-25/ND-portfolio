import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet"; // Make sure to install react-helmet

const Contact = () => {
  useGSAP(() => {
    const subBtn = gsap.timeline();
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
      <Helmet>
        <title>Contact Us | Naalvar Diagnostic Drugs</title>
        <meta
          name="description"
          content="Contact Naalvar Diagnostic Drugs for inquiries, product information, or skincare tips. We're here to help!"
        />
        <meta
          name="keywords"
          content="Contact, Skincare Support, Naalvar, Natural Soaps"
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <main className="flex max-md:pt-[100px] max-md:flex-col gap-10 w-screen md:max-h-[67vh] mb-5 md:my-32 px-[7.5vw] font-poppins">
        <section className="flex flex-1 flex-col gap-5">
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

        <section className="flex-1" aria-label="Contact Form">
          <form className="flex flex-col gap-8" name="contact-form">
            <div className="flex gap-12 max-md:gap-6">
              <div className="flex-1 w-[50%]">
                <label
                  htmlFor="first-name"
                  className="mb-2 block w-full font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Jane"
                  required
                  className="rounded-lg bg-white border-2 p-2 w-full"
                />
              </div>

              <div className="flex-1 w-[50%]">
                <label
                  htmlFor="last-name"
                  className="mb-2 block w-full font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Smitherton"
                  required
                  className="rounded-lg bg-white border-2 p-2 w-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <label
                htmlFor="email"
                className="mb-2 block w-full font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@janesfakedomain.net"
                required
                className="rounded-lg bg-white border-2 p-2 w-full"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="message"
                className="mb-2 block w-full font-semibold"
              >
                Your Message
              </label>
              <textarea
                rows={5}
                id="message"
                name="message"
                placeholder="Enter your question or message"
                required
                className="rounded-lg bg-white border-2 p-2 w-full"
              />
            </div>

            <button
              id="submit-button"
              className="w-full rounded-lg bg-primaryRed text-white py-3 text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
