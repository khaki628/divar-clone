import React from "react";

const LocationBtn = () => {
  return (
    <button className="flex flex-row items-center justify-between text-sm px-4 h-[40px] w-[87px] rounded  hover:bg-gray-100 ml-2 duration-500">
      <img
        src="./src/assets/svg/location.svg"
        alt="location-icon"
        className="w-5 h-5"
      />
      <p>تهران</p>
    </button>
  );
};

export default LocationBtn;
