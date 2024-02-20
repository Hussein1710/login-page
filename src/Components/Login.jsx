import React, { useState } from "react";
import backImg from "../assets/Hairdresser.jpg";
import Logo from "../assets/Saloon.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [activeTab, setActiveTab] = useState('client');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  const divStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    display: "flex",
  };

  return (
    <div className="flex w-full h-screen bg-black">
      <div className="hidden relative lg:flex h-full w-1/2 justify-center">
        <h1 className="text-white text-[100px] mt-20">Login</h1>
      </div>

      <div
        style={divStyle}
        className="w-full flex flex-col lg:w-1/2"
      >
        {/* <div className="absolute inset-10 bg-pink-300 opacity-70 blur-none"></div> */}
        <div className="flex flex-col gap-3 mt-12 md:mt-2 mx-6">
            <img src={Logo} alt="Logo" className="w-[20%] md:w-[10%] bg-transparent" />
            <div className="flex flex-col ">
                <h1 className="text-3xl font-bold">You're welcome</h1>
                <p className="text-md font-bold">Let's get you set for login</p>
            </div>
        </div>
        <form className="bg-white mt-14 md:mt-2 w-full px-10 py-5 rounded-t-3xl border-gray-100 shadow-lg">
        <div className="flex justify-center">
      <div className="flex gap-10 text-pink-700">
      <p 
          className={`mr-4 px-4 py-2 cursor-pointer ${activeTab === 'client' ? 'border-b-2  font-bold border-pink-700' : ''}`}
          onClick={() => handleTabClick('client')}
        >
          Client
        </p>
        <p 
          className={`px-4 py-2 cursor-pointer ${activeTab === 'professional' ? 'border-b-2  font-bold border-pink-700' : ''}`}
          onClick={() => handleTabClick('professional')}
        >
          Professional
        </p>
        </div>
      </div>
          <div className="mt-5">
            <label className="text-lg font-medium" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-medium" htmlFor="password">
              Password:
            </label>
            <div className="mb-4 relative">
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              {/* Toggle password visibility */}

              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end items-end">
            <button className="font-medium text-base text-black hover:text-pink-700 hover:cursor-pointer ">
              Forgot password
            </button>
          </div>

          <div className="mt-4 flex flex-col justify-center items-center gap-y-4 ">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl w-full md:w-1/2 bg-pink-700 text-white text-lg font-bold">
              Login
            </button>
            <div className="flex gap-2 justify-center ">
              <p>New user?</p>
              <p className="text-pink-500 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all hover:cursor-pointer">Sign in</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
