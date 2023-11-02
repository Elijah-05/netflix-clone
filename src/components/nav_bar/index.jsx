import React, { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";

const NavBar = ({ logo_url, user_icon }) => {
  const [transaparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0  ${
        transaparent
          ? "bg-transparent"
          : " bg-gradient-to-b from-[rgba(0,0,0,0.9)] from-80% to-100% to-[rgba(0,0,0,0)]"
      } z-50 px-6 py-6 duration-1000`}
    >
      <div className="flex max-w-7xl mx-auto justify-between">
        <img className="w-20" src={logo_url} alt="nexflix logo" />
        <img className="w-8" src={userIcon} alt="nexflix user icon" />
      </div>
    </div>
  );
};

export default NavBar;
