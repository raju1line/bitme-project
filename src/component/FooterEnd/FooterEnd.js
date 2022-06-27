import React from "react";

const FooterEnd = (props) => {
  const { id, brand, contact, blog, community, online } = props.item;
  return (
    <div className=" mt-32">
      <div className=" grid grid-flow-row leading-7 text-[#ECF1F5] ">
        <h className=" text-[#00CBFF] ">{id}</h>
        <a href="#">{brand}</a>
        <a href="#">{contact}</a>
        <a href="#">{blog}</a>
        <a href="#">{community}</a>
        <a href="#">{online}</a>
      </div>
    </div>
  );
};

export default FooterEnd;
