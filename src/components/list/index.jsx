import React from "react";

const List = ({ lists }) => {
  return (
    <ul className="">
      {lists?.map((list, index) => {
        return (
          <li className="text-white underline my-3" key={list + index}>
            {list}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
