import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-row-reverse items-center w-full h-[70px] border border-gray-300 rounded   ">
        <input
          type="text"
          placeholder="جستجوی شهر"
          className="w-full h-full mr-2.5 focus:outline-none focus:rounded focus:ring-[#b91c1c] focus:ring-1"
        />
        <img
          src="./src/assets/svg/search-icon.svg"
          alt="search-icon"
          className="w-6 h-6 mr-2.5 "
        />
      </div>
    </>
  );
};

export default SearchBar;
