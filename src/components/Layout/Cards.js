import React from "react";
import ArrowRightIcon from '../../assets/Icon/arrow-right.svg'

const Cards = (props) => {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg transform duration-700 hover:scale-110 ">
        <img src={props.image} className="w-full h-56" alt="imgLetter" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
              {props.desc}
          </p>
          <button className="px-2 py-2 text-base bg-gray-300 rounded text-white m-2 cursor-pointer transform duration-200 hover:scale-110 hover:bg-gray-400 ">
              <a href={props.link}><img alt='img' className='w-10' src={ArrowRightIcon}/></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
