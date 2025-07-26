import React from "react";

const Hero2 = () => {
  return (
    <div
      className="bg-[url('/Heroimage2.svg')] w-full lg:w-[1992px] h-[100px] lg:h-[150px] py-[20px] lg:py-[50px]
    px-4 
    space-y-4 
    lg:px-[300px] flex flex-col item-center justify-center text-center lg:items-start lg:justify-start lg:text-left
    "
    >
      <span className="flex font-pop font-normal text-sm text-white">
        <p>Home</p>
        <p>New Luma Yoga Collection</p>
      </span>
      <h1 className="font-pop font-normal text-4xl text-white">
        Simple Wood Chair Collection.
      </h1>
    </div>
  );
};

export default Hero2;
