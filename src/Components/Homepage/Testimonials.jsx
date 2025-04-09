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
    designation: "Retail Store Owner",
    comment:
      "We've been stocking their soaps for over a year now—customers absolutely love the natural fragrance and smooth texture. Reliable quality every time.",
  },
  {
    name: "Darlene Robertson",
    designation: "Skincare Consultant",
    comment:
      "The herbal ingredients make a noticeable difference. My clients with sensitive skin always ask for this brand. Highly recommended!",
  },
  {
    name: "Leslie Alexander",
    designation: "Online Seller",
    comment:
      "Beautiful packaging and consistently positive customer reviews. This soap brand has really boosted our online store's skincare category.",
  },
  {
    name: "Jacob Jones",
    designation: "Wellness Coach",
    comment:
      "I always recommend their handmade soaps during my wellness sessions. The natural oils and essential scents are incredibly refreshing.",
  },
  {
    name: "Kristin Watson",
    designation: "Spa Manager",
    comment:
      "We switched to using their soaps at our spa, and our clients noticed immediately. Soft on the skin and smells divine.",
  },
  {
    name: "Floyd Miles",
    designation: "Procurement Head – Hotel Chain",
    comment:
      "As a supplier for hospitality amenities, they never disappoint. Timely delivery, premium feel, and great aroma—our guests love them!",
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
              className="bg-white p-[20px] "
              aria-label={`Testimonial from ${ele.name}`}
            >
              <div className="bg-[#C2C2BA] min-h-[225px] p-[20px] flex flex-col gap-[20px] rounded-[24px] h-full ">
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
