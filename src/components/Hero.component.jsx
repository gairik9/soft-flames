import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('img_10.jpg')] bg-cover bg-center bg-no-repeat h-screen font-outfit">
      <div className="flex flex-col items-center justify-center my-20">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold font-playfair text-white">
          SoftFlames
        </h1>
        <p className="mt-6 mb-4 text-[16px] font-normal tracking-tight max-md:text-center">
          Hand-Poured Luxury That Smells Like Heaven - Luxury you can smell.
        </p>
        {/* <img
          src="/img_10.jpg"
          alt="hero_img"
          className="w-full h-[75vh] object-cover aspect-video rounded-[10px]"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
