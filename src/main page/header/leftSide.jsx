import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOutbtn } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import axios from "axios";

const LeftSide = () => {
  const navigate = useNavigate();
  const [LogOutbtn, setlogoutbtn] = useRecoilState(logOutbtn);
  const token = localStorage.getItem("token");
  console.log(token);
  const advertisHandeler = () => {
    navigate("/Advertising");
  };
  const logOutHandeler = () => {
    axios
      .get("http://45.139.10.149:1001/api/logout", {
        token,
      })
      .then((res) => {
        console.log(res);
        setlogoutbtn("دیوار من");
        localStorage.removeItem("token");
        console.log("naridi");
      })
      .catch((err) => {
        console.error(err);
        setlogoutbtn("دیوار من");
        localStorage.removeItem("token");
        console.log("ridi");
      });
  };
  return (
    <div className="flex items-center mr-[262px] ">
      <button
        onClick={logOutHandeler}
        className="flex flex-row items-center justify-evenly text-sm px-2 h-[40px] w-[110px] rounded  hover:bg-gray-100 ml-2 duration-500"
      >
        <img
          src={"./src/assets/svg/persion.svg"}
          alt={"persion-icon"}
          className="w-5 h-5"
        />
        <p className="text-[0.75rem] w-20  ">{LogOutbtn}</p>
      </button>
      <button className="flex flex-row items-center justify-evenly text-sm px-2 h-[40px] w-[110px] rounded  hover:bg-gray-100 ml-2 duration-500">
        <img
          src={"./src/assets/svg/chat.svg"}
          alt={"chat-icon"}
          className="w-5 h-5"
        />
        <p>چت</p>
      </button>
      <button className="flex flex-row items-center justify-between text-sm px-4 h-[40px] w-[87px] rounded  hover:bg-gray-100 ml-2 duration-500">
        <p>پشتیبانی</p>
      </button>
      <button
        onClick={advertisHandeler}
        className="bg-[#a62626] w-[90px] h-10 text-white mr-4 px-4 text-[0.875rem] rounded "
      >
        <a className="w-14 h-10 ">ثبت آگهی</a>
      </button>
    </div>
  );
};

export default LeftSide;
