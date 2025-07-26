import React from "react";

const Navbar2 = () => {
  return (
    <nav className="w-full bg-navColor h-[150px] ">
      <div className=" flex justify-between py-[20px] px-[80px]">
        <input
          type="text"
          placeholder="Search"
          className=" hidden md:block
          w-[277px] h-[34px] py-[25px] px-[] mx-[30px] rounded-full text-gray-600"
        />
        <span className="font-normal text-4xl font-pop text-white flex">
          <img src="Logo2.svg" alt="Logo" />
          SimpleWood
        </span>
        <div className="hidden md:flex gap-4">
          <p className="text-white">English</p>
          <p className="text-white">USD</p>
          <img
            src="Hearts.svg"
            alt="Hearts image"
            className="w-[23px] h-[23px]"
          />
          <img
            src="Profile.svg"
            alt="Profile Image"
            className="w-[23px] h-[23px]"
          />
          <img src="Icon.svg" alt="Icon Image" className="w-[30px] h-[27px]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="font-pop font-normal text-lg flex space-x-5">
          <li to="/" className="text-babyGreen">
            Home
          </li>
          <li className="text-white">Products</li>
          <li className="text-white hidden md:block">Elements</li>
          <li
            className="text-white hidden md:block
          "
          >
            Pages
          </li>
          <li className="text-white">Shop</li>
          <li className="text-white">Sale</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
