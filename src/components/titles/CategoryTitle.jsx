import React from "react";

const CategoryTitle = ({ title, uperCase }) => {
  return (
    <h1
      className={`pl-2 font-bold ${
        uperCase ? "uppercase" : "capitalize"
      } text-2xl text-white`}
    >
      {title}
    </h1>
  );
};

export default CategoryTitle;
