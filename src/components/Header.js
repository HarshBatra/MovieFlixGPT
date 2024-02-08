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
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

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
    <div className="flex justify-between items-center w-screen px-4 md:px-10 py-6 bg-gradient-to-b from-black z-50 text-sm md:text-base fixed">
      <img
        alt="logo"
        src={require("../assets/logo")}
        className="md:w-44 w-1/4 drop-shadow-lg"
      />
      {user && (
        <div className="text-white flex md:gap-6 gap-4 text-xs md:text-base items-center drop-shadow-lg">
          <div
            onClick={handleGptSearch}
            className="bg-red-600 p-2 md:px-4  cursor-pointer hover:bg-white hover:text-red-600"
          >
            {showGptSearch ? "Home" : "GPT✨"}
          </div>
          <div className="flex flex-col items-center">
            <FaCircleUser className="md:w-5 md:h-5" />
            <div>{user.name}</div>
          </div>
          <div
            onClick={handleSignOut}
            className="flex gap-2 items-center bg-red-600 md:px-4 p-2 cursor-pointer hover:bg-white hover:text-red-600"
          >
            Sign Out <FaSignOutAlt />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
