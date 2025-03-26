import React from "react";

const Contact = () => {
  return (<>
    <div className="flex gap-10 h-screen w-screen mt-48 px-20">

      <section className="flex flex-1 flex-col gap-7 text-lg">
        <h1 className="text-primaryRed text-5xl font-bold">
          Contact Us
        </h1>
        <p className="font-semibold text-black/50">Reach Out – Fresh, Natural Care is Just a Message Away!</p>
        <p className="font-semibold text-justify">Have questions or want to learn more about our handcrafted
          soap products? Our friendly and knowledgeable customer
          service team is here to help. Contact us today, and we’ll be
          happy to assist you with product recommendations, skincare
          tips, or any other inquiries you may have. Your satisfaction is
          our priority!</p>
      </section>

      <section className="flex-1">
        <h2 className="text-3xl font-semibold ml-3">Contact me</h2>

        <form className="flex flex-col gap-6 mt-8">
          <div className="flex-1">
            <label htmlFor="first-name" className="mb-2 block w-3/6 font-semibold">First name</label>
            <input type="text" id="first-name" placeholder="Jane" className="rounded-lg bg-white border-2 p-2 w-3/6" />
          </div>

          <div className="flex-1">
            <label htmlFor="last-name" className="mb-2 block w-3/6 font-semibold">Last name</label>
            <input type="text" id="last-name" placeholder="Smitherton" className="rounded-lg bg-white border-2 p-2 w-3/6" />
          </div>

          <div className="flex-1">
            <label htmlFor="email-address" className="mb-2 block w-full font-semibold">Email address</label>
            <input type="email" id="email-address" placeholder="email@janesfakedomain.net" className="rounded-lg bg-white border-2 p-2 w-full" />
          </div>

          <div className="flex-1">
            <label htmlFor="email-address" className="mb-2 block w-full font-semibold">Your message</label>
            <textarea rows={5} id="email-address" placeholder="Enter your question or message" className="rounded-lg bg-white border-2 p-2 w-full" />
          </div>

          <button className="w-full rounded-lg bg-primaryRed text-white py-3 text-lg">Submit</button>
        </form>
      </section>
    </div>
  </>);
};

export default Contact;
