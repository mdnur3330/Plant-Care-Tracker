import React from 'react';
import item4 from "../assets/item-instagram-1.jpg"
const HomeSection = () => {
    return (
        <div>
            <div>
                
            </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-medium leading-none">
            Decorate your
 
            <br className="hidden md:block" />
            home{' '}
            <span className="inline-block text-deep-purple-accent-400">
              with plants
            </span>
          </h5>
          <p className="mb-6">
        Add a touch of nature to your home with beautiful, refreshing indoor plants. Not only do they enhance the beauty of your space, but they also purify the air and create a calm, peaceful atmosphere. Whether it's a cozy corner or your work desk, plants bring life, color, and freshness wherever they're placed. Make your home feel more alive — naturally.
          </p>
          <hr className="mb-5 border-gray-300" />
          
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={item4}
            alt=""
          />
        </div>
      </div>
    </div>
  
    </div>
 

    )
}



export default HomeSection;
