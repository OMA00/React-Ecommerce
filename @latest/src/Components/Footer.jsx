import React from "react";

const Footer2 = () => {
  return (
    <div>
      <div className="flex justify-between bg-navColor   px-[200px] h-[120px] py-[20px]">
        <div className="hidden md:flex gap-3 font-pop text-white text-sm">
          <p>Policy</p>
          <p>Terms and Conditions </p>
          <p>Help</p>
        </div>
        <span
          className="text-center
   lg:font-normal text-small font-pop text-white flex"
        >
          <img src="Logo2.svg" alt="Logo" className="w-[25px] h-[19px]" />
          SimpleWood
        </span>

        <div className="hidden md:flex gap-4">
          <p className="font-pop text-sm text-white font-normal"></p>
          <img
            src="facebook.svg"
            alt="facebook logo"
            className="w-[10px] h-[20px]"
          />
          <img
            src="Twitter.svg"
            alt="Twitter logo"
            className="w-[10px] h-[20px]"
          />
          <img
            src="youtube.svg"
            alt="Youtube logo"
            className="w-[10px] h-[20px]"
          />
          <img
            src="google.svg"
            alt="Google Logo"
            className="w-[10px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
