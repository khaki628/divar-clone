import React from "react";

const SideBarItem = ({ src, text, alt }) => {
  return (
    <li className="w-full py-3">
      <a href="#" className="flex items-center ">
        <img className="w-5 h-5 ml-2" src={src} alt={alt} />
        <p className="text-[.875rem]">{text}</p>
      </a>
    </li>
  );
};

export default SideBarItem;
