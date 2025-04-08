import React from "react";
import { Soap2, Soap3, ScrollButton } from "../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

// Register GSAP plugin once globally
gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from("#prod-strip-1", {
      minWidth: 0,
      duration: 1,
    }).from(
      "#prod-strip-2",
      {
        x: "-70vw",
        duration: 1,
      },
      0
    );

    const productImages = gsap.timeline({
      scrollTrigger: {
        trigger: "#product-section",
        start: "center bottom",
      },
    });

    productImages
      .from(".right-img", { x: 1000, duration: 0.75, opacity: 0 }, 0)
      .from(".left-img", { x: -1000, duration: 0.75, opacity: 0 }, 0);
  }, []);

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${Soap2})`,
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
          <div className="w-full min-h-[5dvh] flex">
            <div className="min-w-[70%] max-md:min-w-[60%]" />
            <div
              id="prod-strip-1"
              className="min-w-[30%] max-md:min-w-[40%] bg-primaryRed"
            />
          </div>
          <div className="w-full min-h-[5dvh] flex bg-white">
            <div
              id="prod-strip-2"
              className="min-w-[70%] max-md:min-w-[60%] bg-primaryRed"
            />
            <div className="min-w-[30%] max-md:min-w-[40%] flex items-center justify-end md:px-[7.5vw] px-2">
              <div className="flex items-center">
                <img
                  src={ScrollButton}
                  alt="Scroll down"
                  className="w-[30px]"
                />
                <h1 className="text-[16px] max-md:text-xs text-black ml-2">
                  Scroll for more
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="md:px-40 px-[20px] md:py-20 py-10">
        <p className="text-lg text-justify max-md:text-sm">
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
      <div className="flex-1 mt-10">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm">{productDesc}</p>
      </div>
      <div className="md:w-[40%]">
        <img
          src={productImage}
          alt={`Product Image of ${productName}`}
          className="rounded-lg right-img"
        />
      </div>
    </div>
  ) : (
    <div className="flex gap-20 max-md:flex-col-reverse max-md:gap-10">
      <div className="md:w-[40%]">
        <img
          src={productImage}
          alt={`Product Image of ${productName}`}
          className="rounded-lg left-img"
        />
      </div>
      <div className="flex-1 mt-10">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm">{productDesc}</p>
      </div>
    </div>
  );
};
