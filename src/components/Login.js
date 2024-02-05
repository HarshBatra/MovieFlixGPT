import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleOnClick = () => {
    // Validate email and password
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const message = checkValidData(email, password);
    // console.log(message);
    setErrorMsg(message);
    if (message) return;

    // sign-in / sign-up logic
    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  name: displayName,
                  email: email,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
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
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="p-2 m-2"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="p-2 m-2"
        />
        <input
          ref={passwordRef}
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
