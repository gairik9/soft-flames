import React from "react";
import { PRODUCT_CONTENT } from "../constants/data";

const Products = () => {
  return (
    <section id="products" className="w-[90%] mx-auto ">
      <div className="my-20 md:my-40">
        <h2 className="text-3xl lg:text-[56px] font-outfit font-medium text-center">
          Our Candle Collection
        </h2>

        <div className="my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCT_CONTENT.map((product, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.020] cursor-pointer"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="aspect-square object-cover w-full h-full"
                />
              </div>
              <div className="px-12 pb-12">
                <h3 className="text-[24px] lg:text-[34px] font-medium mt-4 font-playfair">
                  {product.title}
                </h3>
                <p className="mt-2 text-[16px] lg:text-[16px] text-justify font-outfit font-light text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
