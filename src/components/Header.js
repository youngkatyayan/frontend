import React, { useState } from "react";
import logo from "../assests/DK.png";
import { Link } from "react-router-dom";
// Import Icon from from react icons
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [open, setopen] = useState(false);
  const loginOpt = () => {
    setopen((prev) => {

      return !prev
    })
  }
  return (
    <>
      <header className="fixed w-full h-16 shadow-md px-3 z-50 bg-white">
        <div className=" flex items-center h-full justify-between">
          <Link to={""}>
            <div className=" w-[6.5rem] h-full">
              <img src={logo} alt="Logo not found" className="h-full" />
            </div>
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            <nav className="flex items-center gap-3 text-base md:text-lg  md:gap-6 pr-9 ">
              {/* TO refer the target which target should be hit when anyone press the option */}
              <Link to={""}>Home</Link>
              <Link to={"menu"}>Menu</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
            <div className="text-2xl text-slate-600 relative">
              {/* Use Icons from react icons library */}
              <FaCartShopping />
              <div className="absolute flex items-center justify-center -top-2 -right-1 text-sm bg-orange-600 rounded-full w-4 f-2 p-0 ">0</div>
            </div>
            <div className=" pr-5" onClick={loginOpt}>
              <div className="text-2xl  text-slate-600 border-2 p-1 border-slate-500 rounded-full cursor-pointer">
                <FaUserAlt />
              </div>
              {
                open && (<div className="absolute shadow-md p-2 py-3 right-3 top-14 flex-col flex">
                  <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New Product</Link>
                  <Link  to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                </div>)
              }


            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
