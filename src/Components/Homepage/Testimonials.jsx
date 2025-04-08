import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { BsPerson } from "react-icons/bs";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DUMMY_DATA = [
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. Impressive service, work ethic, and attention to detail.",
  },
  {
    name: "Darlene Robertson",
    designation: "Creative Director",
    comment:
      "Absolutely loved collaborating with Golio! Their creativity and problem-solving skills are top-notch.",
  },
  {
    name: "Leslie Alexander",
    designation: "Product Manager",
    comment:
      "The results were phenomenal. We saw an immediate improvement in user engagement and overall aesthetics.",
  },
  {
    name: "Jacob Jones",
    designation: "Tech Lead",
    comment:
      "Highly recommended! Golio brought a fresh perspective and delivered ahead of deadlines.",
  },
  {
    name: "Kristin Watson",
    designation: "UX Researcher",
    comment:
      "What stood out was their ability to truly understand user behavior and adapt the design accordingly.",
  },
  {
    name: "Floyd Miles",
    designation: "CTO",
    comment:
      "Professional, efficient, and highly creative. Golio has been instrumental in our product design journey.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="flex flex-col min-h-screen justify-center gap-[100px] font-poppins w-screen overflow-hidden"
    >
      <Helmet>
        <title>Testimonials - Client Feedback | Golio</title>
        <meta
          name="description"
          content="Read what our clients say about working with Golio. Discover how our design and development services made an impact."
        />
      </Helmet>

      {/* Heading + Controls */}
      <div className="flex max-md:flex-col max-md:gap-6 w-full justify-between px-[62px] max-md:px-[40px]">
        <h2
          id="testimonials-heading"
          className="text-[64px] max-md:text-5xl font-semibold text-primaryBlue"
        >
          Testimonials
        </h2>
        <div className="flex gap-[20px] items-center max-md:w-full max-md:justify-end">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hover:bg-primaryBlue hover:text-white duration-300 rounded-full p-2"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-black text-white hover:bg-primaryBlue duration-300 rounded-full p-2"
            aria-label="Next testimonial"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full flex justify-center">
        <Slider ref={sliderRef} {...settings} className="w-[90%]">
          {DUMMY_DATA.map((ele, ind) => (
            <article
              key={ind}
              className="bg-white p-[20px]"
              aria-label={`Testimonial from ${ele.name}`}
            >
              <div className="bg-[#C2C2BA] p-[20px] flex flex-col gap-[20px] rounded-[24px] h-full justify-between">
                <header className="flex gap-[8px] items-center">
                  <div className="bg-primaryBlack rounded-full p-2 text-white">
                    <BsPerson size={32} />
                  </div>
                  <div>
                    <p className="font-medium">{ele.name}</p>
                    <p className="text-[14px] text-[#7534FF]">
                      {ele.designation}
                    </p>
                  </div>
                </header>
                <blockquote className="max-w-[340px] text-justify leading-[26px]">
                  <p>“{ele.comment}”</p>
                </blockquote>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
