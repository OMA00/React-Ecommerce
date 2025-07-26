import React from "react";
import ProductCard2 from "./Mini-Components/ProductCard2";
import Footer2 from "./Footer";

const ProductGrid2 = () => {
  return (
    <div>
      <div className="py-[40px] px-[50px] flex gap-4">
        <div
          className="hidden md:block
        w-[287px] h-[45px] "
        >
          <h3 className=" border-b-[1px] border-gray-300 font-pop font-3xl text-lg text-navColor p-2 py-4 ">
            Shopping Options
          </h3>
          <ul>
            <li className=" border-b-[1px] border-gray-300 font-pop font-normal text-sm p-1 text-gray-500">
              Style
            </li>
            <li className=" border-b-[1px] border-gray-300 font-pop font-normal text-sm p-1 text-gray-500">
              Category
            </li>
            <li className=" border-b-[1px] border-gray-300 font-pop font-normal text-sm p-1 text-gray-500">
              Size
            </li>
            <li className=" border-b-[1px] border-gray-300 font-pop font-normal text-sm p-1 text-gray-500">
              Price
            </li>
            <li className=" border-b-[1px] border-gray-300 font-pop font-normal text-sm p-1 text-gray-500">
              Color
            </li>
            <div>
              <h3 className="font-pop font-3xl text-lg py-2 p-1">
                Compare Products
                <span className="font-pop font-normal text-sm text-gray-500">
                  (2 items)
                </span>
              </h3>
              <p className="font-pop font-normal text-small">Summit Watch</p>
              <p className="font-pop font-normal text-small">
                Crusie dual analog watch.
              </p>
              <div className="flex py-4">
                <button className="text-white font-pop text-sm bg-babyGreen p-2 w-[100px] h-[40px]">
                  Compare
                </button>
                <button className="text-navColor font-pop bg-white p-2 w-[100px] h-[40px]">
                  Clear all
                </button>
              </div>
            </div>
          </ul>
        </div>
        {/*his is the 2nd flex Container*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This is the first grid*/}
          <div className="py-6">
            <ProductCard2
              title="Chairs"
              imageUrl={"/Chairs.svg"}
              oldprice={"$45"}
              price={"$44"}
            />
            <ProductCard2
              title="Chairs-2"
              imageUrl={"/Chairs - 2.svg"}
              oldprice={"$45"}
              price={"$44"}
              className={"py-4"}
            />
            <ProductCard2
              title="Chairs - 3"
              imageUrl={"/Chairs - 3.svg"}
              oldprice={"$45"}
              price={"$44"}
              className={"py-4"}
            />
          </div>
          {/*This is the second grid */}
          <div className="py-6">
            <ProductCard2
              title="Chairs - 4"
              imageUrl={"/Chairs - 3.svg"}
              oldprice={"$45"}
              price={"$44"}
            />
            <ProductCard2
              title="Chairs - 5"
              imageUrl={"/Chairs - 2.svg"}
              oldprice={"$45"}
              price={"$44"}
              className={"py-4"}
            />
            <ProductCard2
              title="Chairs - 6"
              imageUrl={"/Chairs - 4.svg"}
              oldprice={"$45"}
              price={"$44"}
              className={"py-4"}
            />
          </div>
          {/*This is the Third grid */}
          <div className="py-6">
            <ProductCard2
              title="Chairs - 7"
              imageUrl={"/Chairs.svg"}
              oldprice={"$45"}
              price={"$44"}
            />
            <ProductCard2
              title="Chairs - 8"
              imageUrl={"/Chairs - 2.svg"}
              oldprice={"45"}
              price={"$44"}
              className={"py-4"}
            />
            <ProductCard2
              title="Chairs - 9"
              imageUrl={"/Chairs - 4.svg"}
              oldprice={"$45"}
              price={"$45"}
              className={"py-4"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid2;
