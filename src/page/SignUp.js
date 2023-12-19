import React, { useState } from "react";
import signLogo from '../assests/15-13-11-358_512.gif'
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom'
import { ImagetoBase64 } from "../utility/ImageToBase64.js";
const SignUp = () => {

  const navigate = useNavigate();

  const [showConPass, setshowConPass] = useState(false);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  })
  console.log(data)
  const [showPassword, setshowPassword] = useState(false);
  let showPass = () => {
    setshowPassword(prev => !prev)
  }
  let showConPassword = () => {
    setshowConPass(prev => !prev)
  }
  let handleOnChange = (e) => {
    let { name, value } = e.target
    setdata((prev) => {
      return {
        ...prev,
        [name]: value
      }

    })
  }
  let uploadImageHandle = async (e) => {
    // console.log(e.target.files[0])
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)
    setdata((prev) => {
      return {
        ...prev,
        image: data
      }
    })
  }






  let checkValidation = (e) => {
    e.preventDefault();
    let { firstname, email, password, confirmpassword } = data;
    if (firstname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        alert("Successfully")
        navigate("/login")
      }
      else {
        alert("Check your confirm password")
      }

    }
    else {
      alert("Fill all fields")
    }
  }
  return (
    <div className=" p-2 md:p-4">
      <div className="max-w-sm w-full m-auto bg-white p-4">

        <div className="overflow-hidden drop-shadow-md shadow-md p-1 pb-3 ">
          <label htmlFor="xx">
            <div className="border-8 overflow-hidden drop-shadow-md shadow-md m-auto flex  justify-center items-center relative  rounded-full w-[100px] h-[100px]">

              <img src={data.image?data.image:signLogo} alt="fsf" className="w-[6rem] h-[6rem] " />
              <div className="absolute text-white bottom-0 overflow-hidden bg-zinc-600 px-6 py-[0.1rem]  bg-opacity-50">
                <p className="">Upload</p>
              </div>
            </div>
            <input type={"file"} accept="image/*" className="absolute hidden bottom-0" id="xx" onChange={uploadImageHandle} />
          </label>

        </div>


        <form action="" className="flex flex-col py-2" onSubmit={checkValidation} >
          <label htmlFor="firstname">First Name :</label>
          <input type={"text"} placeholder="Enter your first name..." value={data.firstname} onChange={handleOnChange} name="firstname" id="firstname" className=" focus-within:outline-blue-200 text-sm mb-1 bg-zinc-200 px-2 py-1 mt-1 rounded" />

          <label htmlFor="lastname">Last Name :</label>
          <input type={"text"} name="lastname" id="lastname" value={data.lastname} onChange={handleOnChange} placeholder="Enter your last name..." className=" focus-within:outline-blue-200 text-sm mb-1 rounded bg-zinc-200 px-2 py-1 mt-1" />
          <label htmlFor="email">Email :</label>
          <input type={"email"} name="email" id="email" value={data.email} onChange={handleOnChange} placeholder="abx@gmail.com" className="focus-within:outline-blue-200 text-sm mt-1 mb-1 px-2 py-1 bg-zinc-200 rounded" />
          <label htmlFor="password">Password :</label>
          <div className="bg-zinc-200 my-1 px-2 py-1  rounded flex items-center ">
            <input type={showPassword ? "text" : "password"} name="password" value={data.password} onChange={handleOnChange} id="password" placeholder="*********" className=" bg-zinc-200 focus-within:outline-none w-full" />
            <span className="" onClick={showPass}>{showPassword ? <BiShow /> : <BiHide />}</span>

          </div>
          <label htmlFor="confirmpassword">Confirm Password :</label>
          <div className="my-1 px-2 py-1 bg-zinc-200 rounded flex items-center">
            <input type={showConPass ? "text" : "password"} value={data.confirmpassword} onChange={handleOnChange} name="confirmpassword" id="confirmpassword" placeholder="*********" className=" bg-zinc-200   focus-within:outline-none w-full" />
            <span className="" onClick={showConPassword}>{showConPass ? <BiShow /> : <BiHide />}</span>
          </div>
          <button type={"submit"} className="m-auto bg-blue-600 my-1 border w-[105px] rounded-2xl mt-2 font-serif text-white hover:bg-green-600 shadow-md px-2 py-1">Sign Up</button>
        </form>
        <p className="text-sm">Already have account ? <Link to={"/login"} className="text-blue-900 font-mono font-semibold tracking-tight">login</Link></p>
      </div>
    </div >

  );
};

export default SignUp;
