import React from "react";
import "./HeroArea.css";
import main from "../../component/Img/bitme-hero-img.png";
import Button from "../Button/Button";
import ButtonBig from "../../ButtonBig/ButtonBig";
import { Cart } from "../../utility/CartItem";
import service from "../../component/Img/bitme-service-section-bg.png";
import CartData from "../CartData/CartData";

const HeroAreea = () => {
  return (
    <div className="hero-back-ground relative w-full h-[91rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 px-[5rem]">
        <div className="mt-[4rem] mb-[8rem] table">
          <div className=" table-cell align-middle">
            <h1 className=" text-[3.8em] text-[#ECF1F5] leading-[4.7rem] mb-5">
              The space is <br /> made of bitme.
            </h1>
            <h3 className=" text-xl text-[#A9BBCC] leading-[2rem]">
              Trade, earn, and win crypto on the most <br />
              popular decentralized platform in the galaxy.
            </h3>
            <div className="flex items-center gap-3 mt-6">
              <div className=" col-start-1">
                <ButtonBig connect={"Connect Wallet"} />
              </div>

              <div className="text-[#ECF1F5] col-start-2">
                <Button trade={"Trade Now"} />
              </div>
            </div>
            <div className=" md:flex gap-8 text-[#00CBFF] mt-[4rem]">
              <h1 className=" text-3xl">
                $959B+ <br />
                <span className=" text-[#A9BBCC] text-lg">Trade Volume</span>
              </h1>

              <h1 className="text-3xl">
                96M+ <br />
                <span className=" text-[#A9BBCC] text-lg">All Time Trades</span>
              </h1>

              <h1 className="text-3xl">
                250+ <br />
                <span className=" text-[#A9BBCC] text-lg">Integrations</span>
              </h1>
            </div>
          </div>
        </div>
        <div className=" relative z-10 table">
          <div className=" table-cell align-middle">
            <img className="object-cover" src={main} alt="" />
          </div>
        </div>
      </div>
      <div className=" h-[46rem] relative">
        <div className="md:flex justify-center items-center ">
          <div className=" text-center relative mt-16">
            <h1 className=" text-[#ffb411]">Join the bitme echosystem</h1>
            <h1 className=" text-[2.5rem] text-[#ECF1F5] leading-10 mt-3 mb-6">
              Used by millions. <br /> Trusted with billions.
            </h1>
            <p className="text-[#A9BBCC] ">
              Bitme has the most users of any decentralized platform, ever. And
              those <br /> users are now entrusting the platform with over $5.8
              billion in funds.
            </p>
          </div>
        </div>
        <div className="px-[6rem]">
          <div className="relative  grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  justify-around mt-20 z-10 gap-6 w-full">
            {Cart.map((data) => (
              <CartData data={data} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-10 text-white z-10 relative">
          <ButtonBig learn={"learn more"} />
          <Button now={"trade now"} />
        </div>
        <div className="  w-[100%] mt-[-51rem] -z-10 h-[60rem] object-cover">
          <img className=" w-[100%] h-[59rem]" src={service} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroAreea;
