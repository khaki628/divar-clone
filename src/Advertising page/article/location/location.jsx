import React from "react";
import { useState } from "react";

const Location = () => {
  const [show, setshow] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [citysPick, setcitysPick] = useState("تهران");
  const moudalshow = () => {
    setshow(!show);
  };
  const citys = [
    { name: "تهران", id: 1 },
    { name: "مشهد", id: 2 },
    { name: "کرج", id: 3 },
    { name: "شیراز", id: 4 },
    { name: "اصفهان", id: 5 },
    { name: "اهواز", id: 6 },
    { name: "تبریز", id: 7 },
    { name: "کرمانشاه", id: 8 },
    { name: "قم", id: 9 },
    { name: "رشت", id: 10 },
  ];

  if (searchInput.length > 0) {
    citys.filter((citys) => {
      return citys.name.match(searchInput);
    });
  }

  return (
    <>
      <p className="pt-8 pb-2 ">شهر</p>
      <div className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded relative">
        <button
          onClick={moudalshow}
          className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black "
        >
          <p className="pr-4">{citysPick}</p>
          <img
            className="h-8 w-8 pl-2"
            src="./src/assets/svg/arrowDown.svg"
            alt="arowDown-icon"
          />
        </button>
        {/*start moudal--------------------------------------------------- */}

        <div
          className=" w-full h-[424px] bg-white absolute top-10"
          hidden={show}
        >
          {/* search bar --------------------------------------- */}
          <div className=" w-full relative text-black ">
            <input
              className=" flex flex-row h-[40px] w-full px-5 pr-12  text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="جستجو در همه اگهی ها "
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-[14px] mr-4"
            >
              <img
                src="./src/assets/svg/search-icon.svg"
                alt="search-icon"
                className="w-4 h-4"
              />
            </button>
          </div>
          {/* options of location */}
          <ul className="w-full flex flex-col">
            {citys
              .filter((item) => {
                return searchInput.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLocaleLowerCase().includes(searchInput);
              })
              .map((item) => (
                <li
                  onClick={() => {
                    setcitysPick(item.name);
                    setshow(true);
                  }}
                  key={item.id}
                  className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 "
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/*map------------------------------------------- */}
      <p className="pb-4 pt-10">موقعیت مکانی آگهی</p>
      <img src="./src/assets/img/map.png" alt="map-img" />
    </>
  );
};

export default Location;
