import React from "react";
import product1 from "../assets/product-item-1.jpg";
import product8 from "../assets/product-item-17.jpg";
import product2 from "../assets/product-item-2.jpg";
import product3 from "../assets/product-item-20.jpg";
import product4 from "../assets/product-item-21.jpg";
import product5 from "../assets/product-item-4.jpg";
import product6 from "../assets/product-item-6.jpg";
import product7 from "../assets/product-item-7.jpg";

const TopRatingBestSelling = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Top Rating</span>
          </span>{" "}
          Best Selling
        </h2>
        <p className="text-base  md:text-lg">
          Show Off Your Green Style with Beautiful Plant Stands Elevate your
          indoor garden with stylish plant stands that do more than just hold
          your plants — they inspire creativity. Whether you prefer a minimalist
          look, a boho vibe, or a modern aesthetic, our beautifully crafted
          plant stands let you mix, match, and design your own green corners
          just the way you like. Add height, dimension, and personality to any
          space — and turn your plants into art.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product1}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product2}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product3}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product4}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product5}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product6}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product7}
            alt="Person"
          />
        </div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={product8}
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatingBestSelling;
