import React from "react";

const FilterField = ({ text }) => {
  return (
    <div className="w-[248px] h-[40px] flex border-t border-slate-300 py-7">
      <a href="#" className="flex flex-row items-center">
        <img
          src="./src/assets/svg/arrowDown.svg"
          alt="arrow-icon"
          className="w-6 h-6"
        />
        <p className="font-medium text-[rgba(0, 0, 0, .87)] mr-1 text-[0.75rem]">
          {text}
        </p>
      </a>
    </div>
  );
};

export default FilterField;
