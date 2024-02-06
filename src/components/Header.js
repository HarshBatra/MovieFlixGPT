import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid: uid,
            name: displayName,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between items-center w-full px-10 py-6 bg-gradient-to-b from-black z-10">
      <img
        alt="logo"
        src={require("../assets/logo")}
        className="w-44 drop-shadow-lg"
      />
      {user && (
        <div className="text-white flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <FaCircleUser className="w-5 h-5" />
            <div>{user.name}</div>
          </div>
          <div
            onClick={handleSignOut}
            className="flex gap-2 items-center bg-red-600 px-4 py-2 cursor-pointer hover:bg-white hover:text-red-600"
          >
            Sign Out <FaSignOutAlt />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
