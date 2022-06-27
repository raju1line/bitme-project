import React from "react";
import "./CartData.css";

const CartData = (props) => {
  const { name, data, imgs } = props.data;

  return (
    <div className="">
      <div className="bg-color p-8 rounded-[1rem]">
        <h1 className="text-[1.8rem] mb-[.8rem] text-[#ECF1F5] ">{name}</h1>
        <h4 className=" text-[1rem] text-[#A9BBCC] mb-8">{data}</h4>
        <div>
          <img src={imgs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartData;
