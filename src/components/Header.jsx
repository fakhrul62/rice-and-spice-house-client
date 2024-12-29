import Lottie from "lottie-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.json";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
    const li = <>
        <NavLink to="/">Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
    </>
  return (
    <div className="bg-zinc-800">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"><FaBarsStaggered /></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {li}
            </ul>
          </div>
          <Link className="flex gap-2 items-center">
            {/* <span className="w-12"><Lottie animationData={logo} loop={true} /></span> */}
            <span className="flex flex-col -space-y-5 justify-center"><span className="logo-1 text-2xl text-white relative z-20">Rice & Spice</span><span className="logo-2 text-5xl text-amber-400 z-10`">House</span> </span>
          </Link>
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 *:text-white gap-5 items-center">
            {li}
            <Link>
            <button className="bg-transparent hover:bg-zinc-900 duration-300 text-2xl gap-2 text-amber-400 flex items-center px-3 py-2 border border-amber-400 rounded-full" type="button"><PiUserCircleLight  /> <span className="text-base">Login</span> </button></Link>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;