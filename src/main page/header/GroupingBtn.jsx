import React from "react";

const GroupingBtn = () => {
  return (
    <button className="flex flex-row items-center justify-between text-sm px-4 h-[40px] w-[97px] rounded hover:bg-gray-100 duration-500 ">
      <p>دسته&zwnj;ها </p>
      <img
        src="./src/assets/svg/arrowDown.svg"
        alt="arrowDown-icon"
        className="w-[18px] h-[18px]"
      />
    </button>
  );
};

export default GroupingBtn;
