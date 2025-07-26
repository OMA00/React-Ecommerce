import React from "react";
import ProductCard from "./Mini-Components/ProductCard";

const ProductGrid = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2
     lg:grid-col-4
     gap-6 p-4 md:p-8
"
    >
      <div className="space-y-6">
        <ProductCard title="Sofas" imageUrl={"/Sofas.svg"} />
        <ProductCard title="Tables" imageUrl={"/Stools.svg"} />
        <ProductCard
          title="Floor lamps & Fixtures"
          imageUrl={"/big stools.svg"}
        />
        <ProductCard title="Commode" imageUrl={"/drawer.svg"} />
      </div>
      <div>
        <ProductCard title="CupBoard" imageUrl={"/CupBoard.svg"} />
        <ProductCard
          title="Beds & Matresses.svg"
          imageUrl={"/Beds & Matresses.svg"}
        />
        <div
          className=" bg-gray-200
         text-white p-6 rounded-lg shadow-md flex flex-col justify-between"
        >
          <h2 className="font-pop text-2xl font-bold">
            Get<span className="text-babyGreen">10%</span>Discount
          </h2>
          <p>Get 10% discount with notified</p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border border-1px-solid"
          />
        </div>
        <ProductCard
          className="w-[413px] h-[413px]"
          title="Shelving"
          imageUrl={"/Shelving.svg"}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
