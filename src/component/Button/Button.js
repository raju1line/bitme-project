import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className=" buttons">
      <a className="link" href="#">
        {props.name}
        {props.connect}
        {props.trade}
        {props.now}
        {props.ler}
        {props.learn}
        {props.Lear}
      </a>
    </div>
  );
};

export default Button;
