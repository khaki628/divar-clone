import React, { useState } from "react";

const Identity = () => {
  const [modal, setmodal] = useState(true);
  const modalhandeler = () => {
    setmodal(!modal);
  };

  return (
    <>
      <p className="text-xl font-medium py-4">تأیید هویت</p>
      <p className="text-sm text-gray-500 leading-8">
        برای جلوگیری از ورود شمارهٔ موبایل متخلف و افزایش سلامت تعاملات، تأیید
        هویت در دیوار انجام می‌شود.
      </p>
      <p className="text-sm text-gray-500">
        حساب شما در دیوار با شمارهٔ ۰۹۱۰۶۶۳۸۵۲۴ فعال است.
      </p>
      <p className="pt-12 pb-4 text-base font-medium">ملیت</p>
      <button
        onClick={modalhandeler}
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black relative"
      >
        <p className="pr-4 ">ایرانی</p>
        <img
          className="h-8 w-8 pl-2"
          src="./src/assets/svg/arrowDown.svg"
          alt="arowDown-icon"
        />
      </button>
      {/* modal ----------------- */}
      <div className=" relative " hidden={modal}>
        <div className="w-full flex flex-col absolute bg-white">
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            ایرانی
          </p>
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            اتباع
          </p>
        </div>
      </div>
      <p className="text-base font-medium pt-8">تأیید با کد ملی</p>
      <p className="text-xs text-gray-400 my-2">
        توجه: کد ملی شما به کاربران نمایش داده نمی‌شود.
      </p>
      <p className="text-xs text-gray-400 mb-3">
        برای سیم‌کارت شرکتی، شناسهٔ ملی ۱۱ رقمی شرکت را وارد کنید.
      </p>
      <input
        className="w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black placeholder:text-gray-400 pr-4"
        placeholder="مثال: ۰۰۲۰۰۶۸۹۰۰"
        type="text"
      />
    </>
  );
};

export default Identity;
