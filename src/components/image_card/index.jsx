import React from "react";

const ImageCard = ({ image_url, image_alt, bigSize, onClick }) => {
  return (
    <div
      className={` ${
        bigSize ? "w-32" : "w-28"
      } my-3 bg-slate-500 flex-shrink-0 hover:scale-[1.15] hover:mx-2 duration-300`}
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
