import React from "react";

const CallW = () => {
  return (
    <div>
      <p className="text-base font-medium pb-3">روش تماس</p>
      <div className="w-full h-10 border flex flex-row rounded ">
        <button className="w-[177px] border-l text-gray-400">
          تماس ناشناس
        </button>
        <button className="w-[175px] border-l text-gray-400">
          تماس مستقیم
        </button>
        <button className="w-[135px] text-gray-400">غیرفعال</button>
      </div>
      <p className="text-sm text-gray-400 mt-8">
        تماس ناشناس برای جلوگیری از مزاحمت، شمارهٔ شما را نمایش نمی‌دهد و
        کاربران با شمارهٔ واسطه با شما تماس می‌گیرند.
      </p>
      <p className="text-sm text-gray-400 mt-8">
        با انتخاب «تماس مستقیم»، شمارهٔ شما در آگهی نمایش داده می‌شود و کاربران
        با همان شماره تماس می‌گیرند
      </p>
      <p className="text-sm text-gray-400 mt-8">
        در صورت غیرفعال کردن تماس، تنها راه ارتباط شما و کاربران، چت دیوار است.
      </p>
      <div className="w-full h-10 flex flex-row items-center border-b mt-6">
        <img
          className="w-8 h-8"
          src="./src/assets/svg/phone-shield.svg"
          alt="phoneShild-icon"
        />
        <p className="mr-4 w-[420px]">تماس ناشناس چیست؟</p>
        <img
          className="w-3 h-3 "
          src="./src/assets/svg/arrowLeft.svg"
          alt="arrowLeft-icon"
        />
      </div>
    </div>
  );
};

export default CallW;
