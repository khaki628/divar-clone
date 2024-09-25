import React from "react";
import LeftSideBtns from "./leftSideBtns";

const LeftSide = () => {
  return (
    <div className="flex items-center mr-[955px] ">
      <LeftSideBtns
        text={<p className="text-[0.75rem] w-16  ">دیوار من</p>}
        src="./src/assets/svg/persion.svg"
        alt="persion-icon"
      />
      <LeftSideBtns
        text={<p>چت</p>}
        src="./src/assets/svg/chat.svg"
        alt="chat-icon"
      />
      <button className="flex flex-row items-center justify-between text-sm px-4 h-[40px] w-[87px] rounded  hover:bg-gray-100 ml-2 duration-500">
        <p>پشتیبانی</p>
      </button>
    </div>
  );
};

export default LeftSide;
