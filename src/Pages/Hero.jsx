import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import item1 from "../assets/soil-8080788_1920.jpg";
import item2 from "../assets/ai-generated-9016493_1920.jpg";
import item3 from "../assets/pexels-shvetsa-11286066.jpg";

// import required modules
import { Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-3xl font-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> "Bring Nature Home:
                    Refresh Your Space with Indoor Plants"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                    Add a touch of nature to your home with beautiful,plants.
                    refreshing indoor Not only do they enhance the beauty of
                    your space,
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-3xl font-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> "Plant Care Essentials"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                    Learn the fundamentals of taking care of your plants — from
                    proper watering and sunlight to soil tips and regular
                    maintenance — to help them thrive and stay healthy
                    year-round.
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-3xl font-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> "Plant Diagnosis &
                    Treatment"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                    Identify plant issues through careful observation and apply
                    the right treatments to ensure faster recovery and long-term
                    health.
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
