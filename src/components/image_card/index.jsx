import React from "react";

const ImageCard = ({ image_url, image_alt, bigSize, onClick }) => {
  return (
    <div
      className={` ${
        bigSize
          ? "w-40 hover:scale-[1.15] hover:mx-4"
          : "w-36 hover:scale-125 hover:mx-4 "
      } my-3 bg-slate-500 flex-shrink-0 duration-300`}
      onClick={onClick}
    >
      <img
        className=" w-full object-contain "
        src={image_url}
        alt={image_alt}
      />
    </div>
  );
};

export default ImageCard;
