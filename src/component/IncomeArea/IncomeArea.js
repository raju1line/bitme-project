import React from "react";
import ButtonBig from "../../ButtonBig/ButtonBig";
import Button from "../Button/Button";
import border from "../../component/Img/Line-border.png";
import cercal from "../../component/Img/bitme-circle.png";
import { inData } from "../../utility/IncomeData";
import "./IncomeArea.css";

const IncomeArea = () => {
  return (
    <div className=" bg-[#0C233E] relative -z-0">
      <div>
        <div className=" grid justify-center items-center text-center">
          <div className=" mt-24 leading-9">
            <p className=" font-normal text-[#ffb411]">
              Join the bitme echosystem
            </p>
            <h2 className=" text-[2.2rem] text-[#ECF1F5] leading-9 m-5">
              Earn passive income with <br /> crypto.
            </h2>
            <p className=" font-bold text-[#A9BBCC]">
              PancakeSwap makes it easy to make your crypto work for you.
            </p>
            <div className=" flex items-center gap-5 justify-center mt-11">
              <div>
                <ButtonBig Explore={"Explore"} />
              </div>
              <div className=" text-white">
                <Button learn={"Learn"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100% mt-28 grid justify-center items-center">
          <img className=" object-cover" src={border} alt="" />
        </div>
      </div>
      <div className=" absolute top-[-4rem] right-[18rem]">
        <img src={cercal} alt="" />
      </div>
      <div className=" grid justify-center items-center">
        <h1 className="text-[2.2rem] text-[#ECF1F5] leading-9 mt-14">
          Our Top Farms
        </h1>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 px-[5rem] mt-24 pb-24">
        {inData.map((data, index) => {
          return (
            <div key={index}>
              <div className="income-cart  rounded-[22px] p-6 ">
                <h1 className=" text-[#ffb411]">{data.name}</h1>
                <h2 className="text-[1.5rem] text-[#ECF1F5]">{data.income}</h2>
                <h3 className=" text-lg text-[#A9BBCC]">{data.month}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncomeArea;
