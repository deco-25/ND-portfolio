import React from "react";
import { Soap2, Soap3, ScrollButton } from "../assets";

const Shop = () => {
  return (
    <div>
      <main
        style={{ backgroundImage: `url(${Soap2})` }}
        className="w-screen relative  px-[50px] h-screen flex flex-col gap-6 max-md:justify-end max-md:items-end items-center justify-center bg-cover bg-no-repeat text-white"
      >
        <h1 className="font-bold text-5xl text-shadow-xl max-md:text-4xl">
          Antibacterial Soaps
        </h1>
        <h2 className=" text-xl md:mb-72 text-shadow-xl mb-[15vh] max-md:text-lg">
          Luxurious, Handcrafted Soaps for Every Skin Type
        </h2>
        <div className="absolute bottom-0 left-0 right-0 min-h-[10vh] max-md:min-h-[15vh] w-screen z-[20]">
          <div className="w-full min-h-[5vh] max-md:max-h-[7.5vh] max-md:min-h-[7.5vh] flex">
            <div className="min-w-[70%] max-md:min-w-[60%]" />
            <div className="min-w-[30%] max-md:min-w-[40%] bg-primaryRed"></div>
          </div>
          <div className="w-full max-h-[5vh] max-md:min-h-[7.5vh] flex">
            <div className="min-w-[70%] max-md:min-w-[60%] bg-primaryRed" />
            <div className="min-w-[30%] max-md:min-w-[40%] flex md:px-[10px] items-center bg-white md:justify-end md:px-[7.5vw]">
              <div className="flex items-center justify-center">
                <img src={ScrollButton} alt="" className="w-[30px] " />
                <h1 className="text-[16px] max-md:text-xs text-black">
                  Scroll for more
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="md:px-40 p-[50px]">
        <p className="md:py-20 text-lg text-justify max-md:text-sm">
          We offer a wide range of pharmaceutical soaps designed for various
          skin types and concerns. From antibacterial and anti-fungal soaps to
          soaps enriched with natural oils for moisturizing and soothing
          properties, we have something for everyone. Our products are ideal for
          use in homes, hospitals, clinics, and other healthcare settings.
        </p>

        <div className="md:space-y-20 md:py-10 md:mb-20">
          <ProductSection
            productName={"Antibacterial Soaps 1"}
            productImage={Soap2}
            imageAlignment="right"
            productDesc={
              "Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."
            }
          />
          <ProductSection
            productName={"Antibacterial Soaps 2"}
            productImage={Soap3}
            imageAlignment="left"
            productDesc={
              "Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."
            }
          />
          <ProductSection
            productName={"Antibacterial Soaps 3"}
            productImage={Soap2}
            imageAlignment="right"
            productDesc={
              "Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."
            }
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
    <div className="flex gap-40 max-md:flex-col max-md:gap-5">
      <div className="flex-1 mt-10">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm">{productDesc}</p>
      </div>

      <div className="md:w-[40%]">
        <img src={productImage} alt={productName} className="rounded-lg" />
      </div>
    </div>
  ) : (
    <div className="flex gap-40  max-md:flex-col-reverse max-md:gap-5">
      <div className="md:w-[40%]">
        <img src={productImage} alt={productName} className="rounded-lg" />
      </div>

      <div className="flex-1 mt-10">
        <h2 className="text-3xl font-bold max-md:text-2xl">{productName}</h2>
        <p className="mt-3 text-justify max-md:text-sm">{productDesc}</p>
      </div>
    </div>
  );
};
