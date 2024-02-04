import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full px-10 py-6 bg-gradient-to-b from-black z-10">
      <img
        alt="logo"
        src={require("../assets/logo")}
        className="w-44 drop-shadow-lg"
      />
    </div>
  );
};

export default Header;
