import React from "react";

const SingleIItem = ({ title, price, location, alt }) => {
  return (
    <div className="w-1/3 h-[184px] p-2 ">
      <div className="p-4 flex flex-row justify-between border border-gray-200 rounded cursor-pointer">
        <div className="w-[170px] flex flex-col justify-between ">
          <p className="text-base">{title}</p>
          <div>
            <p className="text-sm text-gray-400 ">{price}</p>
            <p className="text-xs text-gray-400 ">{location}</p>
          </div>
        </div>
        <img
          className="w-5 h-5 mt-[110px]"
          src="./src/assets/svg/chat.svg"
          alt="chat-icon"
        />
        <img
          className="w-[136px] h-[136px] rounded"
          src="./src/assets/img/ananas.jpg"
          alt={alt}
        />
      </div>
    </div>
  );
};

export default SingleIItem;
