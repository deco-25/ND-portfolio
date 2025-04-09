import React, { useState, useEffect } from "react";
import { Soap2, Soap3, ScrollButton, MobSoap, ScrollMore } from "../assets";
import { Lens } from "../Components/ui/lens";
import { motion } from "motion/react";
import { cn } from "../lib/utlis";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

// Register GSAP plugin once globally
gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const [bgImage, setBgImage] = useState(Soap2);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(MobSoap);
      } else {
        setBgImage(Soap2);
      }
    };

    // Run on mount
    handleResize();

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from("#prod-strip-1", {
      x: "30vw",
      duration: 1,
    }).from(
      "#prod-strip-2",
      {
        x: "-70vw",
        duration: 1,
      },
      0
    );
  }, []);

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100dvh",
          width: "100%",
        }}
        className="w-screen relative px-[50px] h-[100dvh] flex flex-col gap-6 max-md:justify-end max-md:items-end items-center justify-center bg-cover text-white"
      >
        <h1 className="font-bold text-5xl text-shadow-xl max-md:text-4xl">
          Antibacterial Soaps
        </h1>
        <h2 className="text-xl md:mb-72 text-shadow-xl mb-[15dvh] max-md:text-lg">
          Luxurious, Handcrafted Soaps for Every Skin Type
        </h2>

        <div className="absolute bottom-0 left-0 right-0 min-h-[10dvh] max-md:min-h-[15dvh] w-screen z-[20]">
          <div className="w-full min-h-[5dvh] max-md:min-h-[7.5dvh] flex">
            <div className="min-w-[70%] max-md:min-w-[60%]" />
            <div
              id="prod-strip-1"
              className="min-w-[30%] max-md:min-w-[40%] bg-primaryRed"
            />
          </div>
          <div className="w-full min-h-[5dvh] max-md:min-h-[7.5dvh] flex bg-white">
            <div
              id="prod-strip-2"
              className="min-w-[70%] max-md:min-w-[60%] bg-primaryRed"
            />
            <div className="min-w-[30%] max-md:min-w-[40%] flex items-center justify-end md:px-[7.5vw] px-2">
              <div className="flex items-center">
                <img src={ScrollMore} alt="Scroll down" className="w-[30px]" />
                <h1 className="text-[16px] max-md:text-xs text-black ml-2">
                  Scroll for more
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="md:px-[7.5vw] px-[20px] md:py-20 py-10">
        <p className="text-lg text-justify max-md:text-sm" data-aos="fade-up">
          We offer a wide range of pharmaceutical soaps designed for various
          skin types and concerns. From antibacterial and anti-fungal soaps to
          soaps enriched with natural oils for moisturizing and soothing
          properties, we have something for everyone. Our products are ideal for
          use in homes, hospitals, clinics, and other healthcare settings.
        </p>

        <div
          id="product-section"
          className="md:space-y-20 md:py-10 md:mb-20 space-y-10 mt-10"
        >
          <ProductSection
            productName="Antibacterial Soaps 1"
            productImage={Soap2}
            imageAlignment="right"
            productDesc="Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."
          />
          <ProductSection
            productName="Antibacterial Soaps 2"
            productImage={Soap3}
            imageAlignment="left"
            productDesc="Enriched with powerful antibacterial agents and skin-soothing ingredients, this soap provides protection without drying your skin. Ideal for frequent hand washers."
          />
          <ProductSection
            productName="Antibacterial Soaps 3"
            productImage={Soap2}
            imageAlignment="right"
            productDesc="Gentle on skin, tough on germs. Our soap is dermatologically tested and designed for sensitive skin while ensuring maximum hygiene."
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;

const ProductSection = ({
  productName,
  productDesc,
  productImage,
  imageAlignment = "right",
}) => {
  return imageAlignment === "right" ? (
    <div className="flex gap-20 max-md:flex-col max-md:gap-10">
      <div className="flex-1 mt-10 max-w-[50%] min-w-[50%]">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm" data-aos="fade-up">
          {productDesc}
        </p>
      </div>
      <Lens className="md:max-w-[40%]">
        <img
          src={productImage}
          alt={`Product Image of ${productName}`}
          className="rounded-lg right-img"
        />
      </Lens>
    </div>
  ) : (
    <div className="flex gap-20 max-md:flex-col-reverse max-md:gap-10">
      <Lens className="md:max-w-[40%] md:min-w-[40%]">
        <img
          src={productImage}
          alt={`Product Image of ${productName}`}
          className="rounded-lg left-img"
        />
      </Lens>
      <div className="flex-1 mt-10 min-w-[50%]">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm" data-aos="fade-up">
          {productDesc}
        </p>
      </div>
    </div>
  );
};
