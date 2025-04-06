import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { BsPerson } from "react-icons/bs";
import gsap from "gsap";

const DUMMY_DATA = [
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  },
  {
    name: "Annette Black",
    designation: "Group 1 PCM",
    comment: "Golio is one of the BEST web designers I've ever worked with professionally. I service, work ethic, and attention to detail"
  }
]

const Testimonials = () => {
  // const [testimonialData, setTestimonialData] = useState(DUMMY_DATA)
  const VISIBLE_CARDS = 3; // always show 3 cards
  const CARD_WIDTH = 400; // width of each card including margin/padding
  const [startIndex, setStartIndex] = useState(0);
  const wrapperRef = useRef(null);


  const handleSlide = (direction) => {
    const maxStart = DUMMY_DATA.length - VISIBLE_CARDS;

    let newIndex = startIndex + (direction === "right" ? 1 : -1);
    newIndex = Math.max(0, Math.min(newIndex, maxStart));

    const offset = -newIndex * CARD_WIDTH;

    gsap.to(wrapperRef.current, {
      x: offset,
      duration: 0.6,
      ease: "power3.inOut",
    });

    setStartIndex(newIndex);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center gap-[100px] font-poppins w-screen overflow-hidden">
      {/* Heading + Controls */}
      <div className="flex w-full justify-between px-[62px]">
        <h1 className="text-[64px] font-semibold text-primaryBlue">Testimonials</h1>
        <div className="flex gap-[20px] items-center">
          <button
            onClick={() => handleSlide("left")}
            disabled={startIndex === 0}
            className="hover:bg-primaryBlue disabled:opacity-30 hover:text-white duration-300 rounded-full p-2"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={() => handleSlide("right")}
            disabled={startIndex >= DUMMY_DATA.length - VISIBLE_CARDS}
            className="bg-black text-white hover:bg-primaryBlue disabled:opacity-30 duration-300 rounded-full p-2"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className="w-[90vw] mx-auto overflow-hidden px-[62px]">
        <div
          className="flex gap-[40px] w-max"
          ref={wrapperRef}
        >
          {DUMMY_DATA.map((ele, ind) => (
            <div
              key={ind}
              className="bg-[#C2C2BA] p-[40px] flex-shrink-0 flex flex-col gap-[20px] w-[360px] rounded-[24px]"
            >
              <div className="flex gap-[8px]">
                <div className="bg-primaryBlack rounded-full p-2 text-white">
                  <BsPerson size={32} />
                </div>
                <div>
                  <h1>{ele.name}</h1>
                  <h1 className="text-[14px] text-[#7534FF]">{ele.designation}</h1>
                </div>
              </div>
              <div>
                <h1 className="max-w-[340px] text-justify leading-[26px]">
                  “{ele.comment}”
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
