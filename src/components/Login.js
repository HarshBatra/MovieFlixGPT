import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleOnClick = () => {
    // Validate email and password

    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMsg(message);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-8 flex flex-col md:w-1/4 mx-5 bg-black bg-opacity-75 backdrop-blur-sm absolute md:m-auto right-0 left-0 top-1/4 drop-shadow-xl"
      >
        <div className="text-xl md:text-3xl text-white my-4 mx-auto">
          {isSignInForm ? "Sign-in" : "Sign-up"}
        </div>
        {!isSignInForm && (
          <input type="text" placeholder="Name" className="p-2 m-2" />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2"
        />
        <div className="m-2 text-red-500">{errorMsg}</div>
        <button
          onClick={handleOnClick}
          className="p-4 m-4 bg-red-600 text-white hover:bg-white hover:text-red-600"
        >
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
