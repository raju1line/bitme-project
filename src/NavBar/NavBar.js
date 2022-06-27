import React from "react";
import { manuBar } from "../ManuBar/ManuBar";
import logo from "../component/Img/bitme-site-logo.png"
import "./NavBar.css";
import ButtonBig from "../ButtonBig/ButtonBig";

const NavBar = () => {
  return (
    <div className="color top-0 z-20 sticky">
      <div className=" md:flex justify-between py-8 px-20">
        <div className=" justify-self-start">
          <div className="flex justify-center items-center">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <nav className=" list-none md:flex justify-center items-center gap-7 text-white">
          {manuBar.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.class} href={item.url}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </nav>
        <div className="">
          <ButtonBig name={"Connect Wallet"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
