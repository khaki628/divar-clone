import React from "react";

const ChatSeting = () => {
  return (
    <>
      <p className="text-xl my-8 ">چت دیوار</p>
      <p className="text-sm text-gray-400">
        اگر مایل به انتشار شمارهٔ موبایل خود نیستید، می‌توانید چت دیوار را فعال
        کنید و انتخاب کنید شمارهٔ شما نمایش داده نشود.
      </p>
      <div className="flex flex-row w-full h-10 my-10">
        <div className="w-9 h-9 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img src="./src/assets/svg/checkMark.svg" alt="checkMark-icon" />
          </div>
        </div>
        <p className="text-sm ">چت دیوار فعال شود</p>
      </div>
    </>
  );
};

export default ChatSeting;
