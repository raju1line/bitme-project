import React from "react";

import FooterEnd from "../component/FooterEnd/FooterEnd";

import { EndData } from "../utility/EndData";
import logo from ".././component/Img/bitme-site-logo.png";
import border from ".././component/Img/Line-border.png";
import { FData } from "../utility/FooterData";
import FooterCart from "../component/FooterCart/FooterCart";

const Footer = () => {
  return (
    <div className="bg-[#0C233E] relative ">
      <div className=" justify-around mt-[-5rem] absolute grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full px-[5rem]">
        {FData.map((data) => (
          <FooterCart data={data} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 gap-5">
        <div className="md:flex justify-center">
          <div className="mt-32">
            <img src={logo} alt="" />
          </div>
        </div>
        {EndData.map((item) => (
          <FooterEnd item={item} />
        ))}
      </div>
      <div className=" flex justify-center">
        <div>
          <img src={border} alt="" />
        </div>
      </div>
      <div className=" flex justify-center mt-6 pb-4">
        <div className=" text-[#ECF1F5]">
          <p>Cpoyright &copy;Bitme 2022 | All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
