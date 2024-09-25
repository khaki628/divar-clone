import React from "react";

const ImgInput = () => {
  return (
    <div className="pt-8">
      <p>عکس آگهی</p>
      <p className="text-xs text-gray-400 py-3.5">
        افزودن عکس بازدهی آگهی شما را تا سه برابر افزایش میدهد.
      </p>
      <div className="relative w-28 h-28">
        <img
          className="w-full h-full relative "
          src="./src/assets/svg/imgUploaderborder.svg"
          alt="uploaderBorder-icon"
        />
        <img
          className=" absolute w-8 h-8 left-[37%] top-[37%]"
          src="./src/assets/svg/picture-icon.svg"
          alt="picture-ico
n"
        />
      </div>
      <p className="text-xs text-gray-400 pt-1 font-normal">
        تعداد عکس های انتخاب شده نباید بیشتر از 10 باشد
      </p>
    </div>
  );
};

export default ImgInput;
