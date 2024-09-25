import React from "react";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";

const Header = () => {
  return (
    <header className="flex flex-row w-full h-16 bg-white border-slate-200 border-b-2 justify-center text-[rgba(0,0,0,.56)] fixed top-0 z-20 ">
      <RightSide />
      <LeftSide />
    </header>
  );
};

export default Header;
