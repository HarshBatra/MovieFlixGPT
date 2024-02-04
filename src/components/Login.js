import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="w-screen h-screen absolute">
        <img
          alt="bg"
          src={require("../assets/bg.jpg")}
          className="object-cover h-full w-full"
        />
      </div>
      <form className="p-8 flex flex-col md:w-1/4 mx-5 bg-black bg-opacity-75 backdrop-blur-sm absolute md:m-auto right-0 left-0 top-1/4 drop-shadow-xl">
        <div className="text-xl md:text-3xl text-white my-4 mx-auto">
          {isSignInForm ? "Sign-in" : "Sign-up"}
        </div>
        {!isSignInForm && (
          <input type="text" placeholder="Name" className="p-2 m-2" />
        )}
        <input type="text" placeholder="Email" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4 bg-red-600 text-white hover:bg-white hover:text-red-600">
          {isSignInForm ? "SIGN IN" : "SIGN UP"}
        </button>
        <div className="text-white mx-auto">
          {isSignInForm ? "New to Movie Flix? " : "Already registered? "}
          <span
            onClick={toggleSignInForm}
            className="cursor-pointer text-red-400"
          >
            {isSignInForm ? "Sign-up" : "Sign-in"}
          </span>{" "}
          now.
        </div>
      </form>
    </div>
  );
};

export default Login;
