import React from "react";

const Title = () => {
  return (
    <div className="w-full h-[120px] flex flex-row items-center border rounded border-gray-300 ">
      <p className="text-xl font-medium text-gray-500 mr-[65px]">لباس</p>
      <img
        className="w-[15rem] h-[10.5rem] relative right-12 z-0 "
        src="./src/assets/img/personal-goods.png"
        alt=""
      />
      <button className="bg-[#a62626] w-[134px] h-10 text-white text-center rounded text-base font-medium relative right-12 ">
        تغییر دسته&zwnj;بندی
      </button>
    </div>
  );
};

export default Title;
