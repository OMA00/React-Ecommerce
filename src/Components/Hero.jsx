import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//Import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroSlidesData = [
    {
      id: 1,
      title: "Simplewood Chair Collection",
      subtitle:
        "Find hand-curated collections that fit your style, space, and budget",
      buttonText: "SHOP-NOW",
      images: ["/Hero1.svg", "/Hero3.svg", "/Hero2.svg"],
    },
    {
      id: 2,
      title: "Simplewood sofa collection",
      subtitle:
        " Find hand-curated collections that fit your style, space, and budget",
      buttonText: "GET-NOW",
      images: ["/Hero1.svg", "/Hero3.svg", "/Hero2.svg"],
    },
    {
      id: 3,
      title: "Simplewood table collection",
      subtitle:
        "Find hand curated collections that fit your style, space and budget",
      buttonText: "BUY-NOW",
      images: ["/Hero1.svg", "/Hero3.svg", "/Hero2.svg"],
    },
    {
      id: 4,
      title: "Simplewood Cupboard collection",
      subtitle:
        "Find hand curated collections that fit your style, space and budget",
      images: ["/Hero1.svg", "/Hero3.svg", "/Hero2.svg"],
    },
  ];
  return (
    <section
      className="relative h-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/HeroBg.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: false }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {heroSlidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full pt-28">
                {/*Left items*/}
                <div className="text-white space-y-8">
                  <h1 className="text-[54px] font-bold leading-none">
                    {slide.title}
                  </h1>
                  <p className="text-lg font-light text-white/60 w-[60%]">
                    {slide.subtitle}
                  </p>
                  <button
                    className="bg-[#7DB800] hover:bg-[#7DB800]/80 text-white px-8 py-3 rounded font-semibold transition-all
                duration-300 flex items-center gap-2 drop-shadow-lg"
                  >
                    {slide.buttonText}
                    <ArrowRight />
                  </button>
                </div>
                {/*right items */}
                <div class="grid grid-cols-2 gap-2 max-w-md ml-auto p-10 ">
                  {slide.images.map((image, index) => (
                    <div
                      key={index}
                      className={`rounded-lg overflow-hidden shadow-lg ${
                        index === 1 ? "row-span-2 p-4" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`product ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
