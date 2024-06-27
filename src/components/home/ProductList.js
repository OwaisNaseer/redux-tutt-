import React from "react";
import { Images } from "../../assets/Images";
import { CartIcon } from "../../assets/Icons";
import Button from "../shared/Button";
import Layout from "../shared/Layout";
const ProductList = (props) => {
  // console.log(props);
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-3">
          <div></div>
          <div className="flex justify-between p-[20px] col-span-2">
            <h1 className="text-black text-[30px] font-black">
              Cart
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center w-[500px] border-2 border-gray18 ml-[50px] px-5 py-2">
      
          <img className="w-[80px] h-[130px]" src={Images.phone} alt="Phone" />
          <div className="flex flex-col">
            <span className="text-[20px] text-black font-bold">
              iPhone price:
            </span>
            <span className="text-[20px] text-black font-bold">$1000</span>
          </div>
          <div>
            <Button
              onClick={() =>
                props.addToCartHandler({ id:1, price: 1000, name: "iPhone 11" })
              }
              type="button"
              text="Add to cart"
              variant="contained"
              className="text-black bg-yellow500 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
            />
            <Button
              onClick={() =>
                props.RemoveToCartHandler({ price: 1000, name: "iPhone 11" })
              }
              type="button"
              text="Remove to cart"
              variant="contained"
              className="text-black bg-[red] mt-1 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-[500px] border-2 border-gray18 ml-[50px] px-5 py-2">
      
      <img className="w-[80px] h-[130px]" src={Images.phone} alt="Phone" />
      <div className="flex flex-col">
        <span className="text-[20px] text-black font-bold">
          iPhone 13 price:
        </span>
        <span className="text-[20px] text-black font-bold">$1200</span>
      </div>
      <div>
        <Button
          onClick={() =>
            props.addToCartHandler({ id:2, price: 1500, name: "iPhone 13" })
          }
          type="button"
          text="Add to cart"
          variant="contained"
          className="text-black bg-yellow500 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
        />
        <Button
          onClick={() =>
            props.RemoveToCartHandler({ price: 1000, name: "iPhone 11" })
          }
          type="button"
          text="Remove to cart"
          variant="contained"
          className="text-black bg-[red] mt-1 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
        />
      </div>
    </div>

    <div className="flex justify-between items-center w-[500px] border-2 border-gray18 ml-[50px] px-5 py-2">
      
      <img className="w-[80px] h-[130px]" src={Images.phone} alt="Phone" />
      <div className="flex flex-col">
        <span className="text-[20px] text-black font-bold">
          iphone 14 price:
        </span>
        <span className="text-[20px] text-black font-bold">$1500</span>
      </div>
      <div>
        <Button
          onClick={() =>
            props.addToCartHandler({ id:3, price: "$1500", name: "iPhone 14" })
          }
          type="button"
          text="Add to cart"
          variant="contained"
          className="text-black bg-yellow500 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
        />
        <Button
          onClick={() =>
            props.RemoveToCartHandler({ price: 1000, name: "iPhone 11" })
          }
          type="button"
          text="Remove to cart"
          variant="contained"
          className="text-black bg-[red] mt-1 font-medium border-[1.5px] rounded-[8px] base:rounded-[16px] border-yellow400 flex justify-center items-center w-[120px] base:w-[137px] h-[22px] small:h-[35px] md:h-[45px] base:h-[40px] text-[10px] base:text-[13px]"
        />
      </div>
    </div>
      </div>
    </Layout>
  );
};

export default ProductList;
