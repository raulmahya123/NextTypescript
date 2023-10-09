"use client";

import Image from "next/image";

import {  CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
           Wellcome To <span className="text-green-900">CODE REBEL</span>
        </h1>
        <p className="hero_subtitle">
        CODE REBEL is the ultimate destination for high-quality UMKM (Micro, Small, and Medium Enterprises) fashion from Bandung,
        <br></br>
        featuring the latest IT-inspired designs. Here, you can discover top-notch products that reflect the creativity of local entrepreneurs. 
        <br></br>
        'CODE REBEL not only offers  <span className="text-green-900">innovative styles but also supports the economic growth of Bandung. </span>
        <br></br>
        Explore a range of unique clothing options with the latest designs and be part of the movement to support Bandung's UMKM sector.
        </p>
        <CustomButton
          title="Shop Now"
          containerStyles="bg-emerald-800 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/321.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
