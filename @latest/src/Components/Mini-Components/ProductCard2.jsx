import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard2 = ({ imageUrl, title, oldprice, price, className }) => {
  return (
    <div>
      <div className={`${className}  `}>
        <img src={imageUrl} alt={title} className="w-[213px] h-[262px]" />
        <div>
          <h2 className="font-pop font-semibold text-base" py-2>
            {title}
          </h2>
          <div className="flex item-center py-1 gap-4">
            <span className="text-gray-400 line-through">{oldprice}</span>
            <span className="font-bold text-gray-800">{price}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-gray-400" />
            <FaStar className="text-gray-400" />
            <p className="text-gray-500 text-sm font-pop">3 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
