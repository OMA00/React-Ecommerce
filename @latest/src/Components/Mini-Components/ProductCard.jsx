import React from "react";

const ProductCard = ({ imageUrl, title, className }) => {
  return (
    <div className={`${className} p-6rounded-lg overflow-hidden bg-white `}>
      <div className="w-full   flex justify-center items-center mb-4  gap-2">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-[371px] h-[262px]"
        />
      </div>
      <div className="flex">
        <p className=" flex text-xl font-bold cursor-pointer font-pop text-gray-800">
          <img src="label.svg" alt="label" />
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
