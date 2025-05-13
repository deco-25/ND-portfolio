import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname === "" || lname === "" || email === "" || message === "") {
      alert("Fill every field :)");
      return;
    }

    const serviceId = "service_dwyeian"; /*service_dwyeian*/
    const templateId = "template_luh7uvs"; /*template_luh7uvs*/
    const publicKey = "yBl2RJSXvwmwa1HxZ";

    const templateParams = {
      fname: fname,
      lname: lname,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

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
          <p
            className="font-[500] text-justify max-md:text-sm"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Have questions or want to learn more about our handcrafted soap
            products? Our friendly and knowledgeable customer service team is
            here to help. Contact us today, and we’ll be happy to assist you
            with product recommendations, skincare tips, or any other inquiries
            you may have. Your satisfaction is our priority!
          </p>
        </section>

        <section className="flex-1" aria-label="Contact Form">
          <form
            className="flex flex-col gap-8"
            name="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-12 max-md:gap-6">
              <div className="relative flex-1 w-[50%]">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder=" "
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="peer w-full border-2 border-gray-300 rounded-lg px-4 pt-6 pb-2 bg-white placeholder-transparent focus:outline-none focus:border-primaryRed autofill:bg-white"
                />
                <label
                  htmlFor="first-name"
                  className="absolute left-3 -top-2 text-sm text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primaryRed"
                >
                  First Name
                </label>
              </div>
              <div className="relative flex-1 w-[50%]">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder=" "
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="peer w-full border-2 border-gray-300 rounded-lg px-4 pt-6 pb-2 bg-white placeholder-transparent focus:outline-none focus:border-primaryRed autofill:bg-white"
                />
                <label
                  htmlFor="last-name"
                  className="absolute left-3 -top-2 text-sm text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primaryRed"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative flex-1 w-[100%]">
              <input
                type="text"
                id="email-address"
                name="email-address"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full border-2 border-gray-300 rounded-lg px-4 pt-6 pb-2 bg-white placeholder-transparent focus:outline-none focus:border-primaryRed autofill:bg-white"
              />
              <label
                htmlFor="email-address"
                className="absolute left-3 -top-2 text-sm text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primaryRed"
              >
                Email Address
              </label>
            </div>

            <div className="relative flex-1">
              <textarea
                rows={5}
                id="message"
                name="message"
                placeholder=" "
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full border-2 border-gray-300 rounded-lg px-4 pt-6 pb-2 bg-white placeholder-transparent focus:outline-none focus:border-primaryRed resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-2 text-sm text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primaryRed"
              >
                Your Message
              </label>
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
