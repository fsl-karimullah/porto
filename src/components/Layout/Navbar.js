import React from "react";
import Logo from '../../assets/Logo/Logo_Porto.jpg'
import { Link } from "react-router-dom";
const Navbar = () => {


  return (
    <div className="container mx-auto bg-gray-100 p-5 font-medium font-serif ">
        <div className="flex justify-between">
      <div>
        <Link to="/"><img className="h-7 m-0.5 my-1 mx-7" alt="logo" src={Logo}></img></Link>
      </div>
      <ul className="flex my-1 sm:text-xl text-base">
        <li className="pr-5 transform duration-100 hover:scale-110 mr-4">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-5 transform duration-100 hover:scale-110 mr-4">
          <Link to="/socialmedia">Social Media</Link>
        </li> 
        <li className="pr-5 transform duration-100 hover:scale-110 mr-4">
          <Link to="/achievement">Achievement</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
