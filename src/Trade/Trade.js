import React from "react";
import ButtonBig from "../ButtonBig/ButtonBig";
import Button from "../component/Button/Button";
import bitcoin from "../../src/component/Img/bitme-bitcoin-currency-img.png";
const Trade = () => {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 
     bg-[#091B31] mt-[0rem] content-center justify-center items-center relative"
    >
      <div className=" pl-[5rem] pr-[8rem] mb-11 table">
        <div className=" table-cell align-middle">
          <p className="text-[#ffb411]">Join the bitme echosystem</p>
          <h1 className="text-[2.5em] leading-10 mt-4 mb-4 text-[#ECF1F5]">
            <span className="text-[#00CBFF]">Trade anything.</span> No <br />{" "}
            registration, no hassle.
          </h1>
          <h4 className=" mb-11 text-[#A9BBCC] text-xl">
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet.
          </h4>
          <div className=" flex items-center gap-4">
            <div>
              <ButtonBig Tra={"trade now learn"} />
            </div>
            <div className=" text-white">
              <Button ler={"learn"} />
            </div>
          </div>
        </div>
      </div>
      <div className=" table object-cover content-center mt-20 mb-11">
        <div className=" table-cell align-middle">
          <img className=" object-cover" src={bitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trade;
