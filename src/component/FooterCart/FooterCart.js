import React from "react";
import './FooterCart.css'

const FooterCart = (props) => {
  const { name, value } = props.data;
  return (
    <div className="">
      <div className="bg-footer p-8 rounded-[1rem]">
        <h1 className="text-[1.8rem] mb-[.8rem] text-[#ECF1F5] ">{value}</h1>
        <h4 className=" text-[1rem] text-[#A9BBCC] mb-8">{name}</h4>
      </div>
    </div>
  );
};

export default FooterCart;
