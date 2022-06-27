import React from "react";
import ButtonBig from "../../ButtonBig/ButtonBig";
import world from "../../component/Img/bitme-world-round-img.png";
import Button from "../Button/Button";

const FooterTop = () => {
  return (
    <div className=" bg-[#091B31]">
      <div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
        <div className=" table">
          <div className=" table-cell align-middle">
            <img src={world} alt="" />
          </div>
        </div>
        <div className=" table">
          <div className=" table-cell align-middle">
            <p className=" font-normal text-[#ffb411]">
              Join the bitme echosystem
            </p>
            <h2 className="text-[2.5rem] leading-9 mt-6 mb-6 text-[#ECF1F5]">
              <span className="text-[#00CBFF]"> Bitme makes</span> our world{" "}
              <br /> go round.
            </h2>
            <h4 className=" font-semibold text-[#A9BBCC]">
              Bitme token is at the heart of the PancakeSwap ecosystem. Buy it,
              win it, farm it, <br /> spend it, stake it... heck, you can even
              vote with it!
            </h4>
            <div className=" flex items-center gap-3 mt-10 ">
              <div>
                <ButtonBig Buy={"Buy Bitme"} />
              </div>
              <div className=" text-white">
                <Button Lear={"Learn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
