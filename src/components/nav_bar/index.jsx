import React, { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";

const NavBar = ({ logo_url, user_icon }) => {
  const [transaparent, setTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        console.log("Window: ", window.scrollY);
        setTransparent(false);
      } else setTransparent(true);
    });

    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-between items-center top-0 w-full max-w-5xl ${
        !transaparent &&
        " bg-gradient-to-b from-black from-60% to-100% to-[rgba(0,0,0,0)]"
      } z-50 px-6 py-4 duration-500`}
    >
      <img className="w-20" src={logo_url} alt="nexflix logo" />
      <img className="w-8" src={userIcon} alt="nexflix user icon" />
    </div>
  );
};

export default NavBar;
