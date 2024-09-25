import React from "react";

const SearchBar = () => {
  return (
    <div className=" relative text-black mr-2">
      <input
        className=" flex flex-row bg-gray-100 h-[40px] w-[480px] px-5 pr-12 rounded text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="جستجو در همه اگهی ها "
      />
      <button type="submit" className="absolute right-0 top-0 mt-[14px] mr-4">
        <img
          src="./src/assets/svg/search-icon.svg"
          alt="search-icon"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default SearchBar;
