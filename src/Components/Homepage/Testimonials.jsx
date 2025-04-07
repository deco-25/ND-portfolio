import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { BsPerson } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DUMMY_DATA = [
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment:
      "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail",
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
    <div className="flex flex-col min-h-screen justify-center gap-[100px] font-poppins w-screen overflow-hidden">
      {/* Heading + Controls */}
      <div className="flex max-md:flex-col max-md:gap-6 w-full justify-between px-[62px] max-md:px-[40px]">
        <h1 className="text-[64px] max-md:text-5xl font-semibold text-primaryBlue">
          Testimonials
        </h1>
        <div className="flex gap-[20px] items-center max-md:w-full max-md:justify-end">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hover:bg-primaryBlue hover:text-white duration-300 rounded-full p-2"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-black text-white hover:bg-primaryBlue duration-300 rounded-full p-2"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="max-md:px-[0px] w-[100%] flex justify-center gap-[50px]">
        <Slider ref={sliderRef} {...settings} className="w-[90%]">
          {DUMMY_DATA.map((ele, ind) => (
            <div key={ind} className="bg-white p-[20px]">
              <div className="bg-[#C2C2BA] p-[20px] flex-shrink-0 flex flex-col gap-[20px] rounded-[24px]">
                <div className="flex gap-[8px]">
                  <div className="bg-primaryBlack rounded-full p-2 text-white">
                    <BsPerson size={32} />
                  </div>
                  <div>
                    <h1>{ele.name}</h1>
                    <h1 className="text-[14px] text-[#7534FF]">
                      {ele.designation}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="max-w-[340px] text-justify leading-[26px]">
                    “{ele.comment}”
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
