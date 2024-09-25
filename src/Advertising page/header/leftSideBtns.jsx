import React from "react";

const LeftSideBtns = ({ text, src, alt }) => {
  return (
    <button className="flex flex-row items-center justify-evenly text-sm px-2 h-[40px] w-[90px] rounded  hover:bg-gray-100 ml-2 duration-500">
      <img src={src} alt={alt} className="w-5 h-5" />
      {text}
    </button>
  );
};

export default LeftSideBtns;
