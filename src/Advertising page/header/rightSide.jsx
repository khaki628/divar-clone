import React from "react";
import Logo from "./logo";
import LocationBtn from "./locationBtn";

const RightSide = () => {
  return (
    <div className=" max-w-[1440px] h-full flex items-center ">
      <Logo />
      <hr className="mx-2 w-px h-6 bg-slate-200" />
      <LocationBtn />
    </div>
  );
};

export default RightSide;
