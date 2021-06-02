import React from "react";

const SocialLinks = (props) => {
  return (
    <div >
      <div className=" w-10 sm:w-10 m-1 sm:m-10 transform duration-500 hover:scale-125 ">
      <a href={props.link}><img src={props.img} alt="" /> </a>
      </div>
    </div>
  );
};

export default SocialLinks;
