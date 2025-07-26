import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-[url('/HeroImage.svg')] bg-center pt-[170px] ">
      <div
        className="flex  justify-center items-center gap-10
      "
      >
        <div
          className=" hidden md:block
        space-y-4"
        >
          <img src="facebook.svg" alt="facebook logo" />
          <img src="Twitter.svg" alt="Twitter logo" />
          <img src="youtube.svg" alt="Youtube logo" />
          <img src="google.svg" alt="Google Logo" />
        </div>
        <div className="w-full text-center md:w-[292px] space-y-3">
          <h2
            className="
          font-pop text-xl md:text-3xl text-white"
          >
            SimpleWood Chair Collection
          </h2>
          <p className="font-normal text-normal text-white">
            Find hand curated collections that fit your style space and budget
          </p>
          <button className="bg-babyGreen text-white p-2">Shop Now</button>
        </div>
        <div className="flex flex-col md:flex-row  gap-4">
          <div className="flex flex-col gap-2">
            <img
              className="w-full md:w-[170px] h-auto md:h-[223px] object-cover rounded-md
              "
              src="image 42.svg"
              alt="Image"
            />
            <img
              className="w-full md:w-[170px] h-auto md:h-[223px] object-cover rounded-md
              "
              src="image 43.svg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="w-full md:w-[280px] h-auto md:h-[408px] object-cover rounded-md
              "
              src="image 40.svg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
