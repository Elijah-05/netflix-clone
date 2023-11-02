import React from "react";

const BannerButton = ({ label, onClick }) => {
  return (
    <div className="group w-fit px-11 py-2 rounded-sm bg-gray-950 opacity-100 hover:bg-white duration-300 cursor-pointer ">
      <h1 className="group-hover:text-black text-white duration-300 cursor-pointer ">
        {label}
      </h1>
    </div>
  );
};

export default BannerButton;
