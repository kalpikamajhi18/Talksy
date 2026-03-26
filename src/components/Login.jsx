import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {

let redirect = useNavigate()

const [login, setLogin] = useState({
  username: "",
  password: ""
})

let handlelogin = async () => {

  let loginData = {
    email: login.username,
    password: login.password
  }

  let resp = await fetch("https://api.skillsvarz.com/api/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })

  let res = await resp.json()

  if(resp.status === 200 || resp.status === 201) { 
    localStorage.setItem("user_id", JSON.stringify(res.user._id))
    toast.success(res.message)
    setTimeout(()=>{
      redirect("/user")
    },1000)
  } else {
    toast.error(res.error)
  }
}

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dac0c9] to-[#dbabbd]">

    {/* Main Card */}
    <div className="w-[750px] h-[450px] bg-white rounded-3xl shadow-2xl flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-[#5E2D3F] to-[#a15c74] flex flex-col justify-center items-center text-white relative">

        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-sm opacity-80">Login to continue your journey</p>

        {/* Decorative Shape */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white opacity-10 rounded-t-full"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-10">

        <h2 className="text-2xl font-bold text-[#5E2D3F] mb-6 text-center">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4 flex items-center border-b border-gray-300">
          <FaUserAlt className="text-[#5E2D3F] mr-2" />
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 focus:outline-none"
            onChange={(e)=> setLogin({...login, username: e.target.value})}
          />
        </div>

        {/* Password */}
        <div className="mb-2 flex items-center border-b border-gray-300">
          <FaLock className="text-[#5E2D3F] mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 focus:outline-none"
            onChange={(e)=> setLogin({...login, password: e.target.value})}
          />
        </div>

        {/* Forgot */}
        <div className="text-right mb-4">
          <Link to="/forget-password" className="text-sm text-[#5E2D3F] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <button
          onClick={handlelogin}
          className="w-full bg-[#5E2D3F] hover:bg-[#4a2332] text-white py-2 rounded-full transition-all duration-300 shadow-md"
        >
          LOGIN
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#5E2D3F] font-medium hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  </div>
)
}

export default Login