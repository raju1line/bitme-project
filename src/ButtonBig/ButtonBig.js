import React from "react";
import './ButtonBig.css'
const ButtonBig = (props) => {
  return (
    <div className="bigbutton-">
      <a className="big-link" href="">
        {props.connect}
        {props.name}
        {props.learn}
        {props.Tra}
        {props.Explore}
        {props.Buy}
      </a>
    </div>
  );
};

export default ButtonBig;
