import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import signLogo from "../assests/15-13-11-358_512.gif";
const Login = () => {
  const [pwd, setpwd] = useState(false);
  const [data, setdata] = useState({ email: "", password: "" });
  let showpwd = () => {
    setpwd((prev) => !prev);
  };
  let handleData = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let submitData = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("Successfully login");
    } else {
      alert("Error aquired");
    }
  };
  return (
    <div className=" p-2 md:p-4">
      <div className="max-w-sm w-full m-auto bg-white p-4">
        <div className="overflow-hidden drop-shadow-md shadow-md p-1 pb-3">
          <img src={signLogo} alt="fsf" className="w-[6rem] h-[6rem] m-auto" />
        </div>
        <form action="" className="flex flex-col py-2" onSubmit={submitData}>
          <label htmlFor="email">Email :</label>
          <input
            type={"email"}
            name="email"
            id="email"
            value={data.email}
            onChange={handleData}
            placeholder="abx@gmail.com"
            className="focus-within:outline-blue-200 text-sm mt-1 mb-1 px-2 py-1 bg-zinc-200 rounded"
          />
          <label htmlFor="password">Password :</label>
          <div className="bg-zinc-200 my-1 px-2 py-1  rounded flex items-center ">
            <input
              type={pwd ? "text" : "password"}
              name="password"
              id="password"
              value={data.password}
              onChange={handleData}
              placeholder="*********"
              className=" bg-zinc-200 focus-within:outline-none w-full"
            />
            <span className="" onClick={showpwd}>
              {pwd ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button
            type={"submit"}
            className="m-auto bg-red-600 my-1 border w-[105px] rounded-2xl mt-2 font-serif text-white hover:bg-green-600 shadow-md px-2 py-1"
          >
            Login
          </button>
        </form>
        <p className="text-sm">
          Don't have account ?{" "}
          <Link
            to={"/signup"}
            className="text-blue-900 font-mono font-semibold tracking-tight"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
