import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const More_info = () => {
  const token = localStorage.getItem("token");
  const type = [
    { name: "مانتو", id: "1" },
    { name: "کت", id: "2" },
    { name: "شلوار", id: "3" },
    { name: "لباس زیر", id: "4" },
    { name: "شال", id: "5" },
    { name: "پارچه ای", id: "6" },
  ];
  //type modal state
  const [modal, setmodal] = useState(true);

  const typehandeler = () => {
    setmodal(!modal);
  };
  // built modal state
  const [built, setbuilt] = useState(true);

  const builtHandeler = () => {
    setbuilt(!built);
  };
  // Condition modal state
  const [Condition, setCondition] = useState(true);

  const ConditionHandeler = () => {
    setCondition(!Condition);
  };
  //states
  const [name, setname] = useState("");
  const handleChangename = (e) => {
    setname(e.target.value);
  };
  const [description, setdescription] = useState("");
  const handleChangedescription = (e) => {
    setdescription(e.target.value);
  };
  const [price, setprice] = useState("");
  const handleChangeprice = (e) => {
    setprice(e.target.value);
  };

  const handleSubmit = () => {
    const _name = name.trim();
    const _description = description.trim();
    const _price = price.trim();
    /////--------------------------- kamel nist
    axios
      .post("http://45.139.10.149:1001/api/products", {
        headers: { token },
        body: {
          name: _name,
          description: _description,
          price: _price,
          image: null,
          status: null,
          city: 1,
          category: 1,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/main-Page");
      })
      .catch((err) => {
        console.error(err);
        console.log("ride");
      });
  };
  return (
    <div>
      <p className="text-base font-medium my-8">زنانه/مردانه</p>
      <div className="flex flex-row w-full h-10 ">
        <div className="w-9 h-9 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img
              className=" rounded-8"
              src="./src/assets/svg/checkMark.svg"
              alt="checkMark-icon"
            />
          </div>
        </div>
        <p className="text-sm ">زنانه</p>
        <div className="w-9 h-9 mr-10 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img
              className=" rounded-8"
              src="./src/assets/svg/checkMark.svg"
              alt="checkMark-icon"
            />
          </div>
        </div>
        <p className="text-sm ">مردانه</p>
      </div>
      <p className="pt-6 pb-4 text-base font-medium">نوع لباس</p>
      <button
        onClick={typehandeler}
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black relative"
      >
        <p className="pr-4 text-gray-400 ">انتخاب کنید</p>
        <img
          className="h-8 w-8 pl-2"
          src="./src/assets/svg/arrowDown.svg"
          alt="arowDown-icon"
        />
      </button>
      {/* modal of Type-cloth-------------------------------------------*/}
      <div className=" relative " hidden={modal}>
        <div className="w-full flex flex-col absolute bg-white z-10">
          {type.map((items) => (
            <p
              key={items.id}
              className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 "
            >
              {items.name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-10 flex flex-row mt-8">
        <div className="w-8 h-8 mr-2 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img src="./src/assets/svg/checkMark.svg" alt="checkMark-icon" />
          </div>
        </div>
        <p className=" text-sm ">در رنگ و طرح متنوع</p>
      </div>
      <p className="pt-8 pb-3 text-base font-medium">تولیدکننده</p>
      <button
        onClick={builtHandeler}
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black"
      >
        <p className="pr-4 text-gray-400 ">انتخاب کنید</p>
        <img
          className="h-8 w-8 pl-2"
          src="./src/assets/svg/arrowDown.svg"
          alt="arowDown-icon"
        />
      </button>
      {/* modal of built in ----------------------------------------*/}
      <div className=" relative z-10 " hidden={built}>
        <div className="w-full flex flex-col absolute bg-white">
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            ایرانی
          </p>
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            خارجی
          </p>
        </div>
      </div>
      {/* ---- */}
      <p className="pt-8 pb-2 text-base font-medium">وضعیت</p>
      <button
        onClick={ConditionHandeler}
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black relative"
      >
        <p className="pr-4 text-gray-400 ">انتخاب کنید</p>
        <img
          className="h-8 w-8 pl-2"
          src="./src/assets/svg/arrowDown.svg"
          alt="arowDown-icon"
        />
      </button>
      {/* modal fo Condition ---------------------------------------*/}
      <div className=" relative z-10 " hidden={Condition}>
        <div className="w-full flex flex-col absolute bg-white">
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            نو
          </p>
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            در حد نو
          </p>
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            کارکرده
          </p>
          <p className="w-full pr-4 py-2 text-start text-[0.875rem] font-medium text-gray-400  hover:bg-gray-200 ">
            نیاز به تعمیر
          </p>
        </div>
      </div>
      <p className="pt-8 pb-3 text-base font-medium">قیمت</p>
      <input
        onChange={handleChangeprice}
        type="number"
        placeholder="قیمت به تومان"
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black placeholder:pr-4 "
      ></input>
      <div className="w-full h-10 flex flex-row mt-8 ">
        <div className="w-8 h-8 mr-2 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img src="./src/assets/svg/checkMark.svg" alt="checkMark-icon" />
          </div>
        </div>
        <p className=" text-sm">قیمت مقطوع است</p>
      </div>
      <p className="text-sm text-gray-400 mt-5">
        با انتخاب این گزینه به خریداران اطلاع می‌دهید قصد تخفیف دادن ندارید و
        قیمت کالا قطعی است.
      </p>
      <div className="w-full h-10 flex flex-row my-6 pt-2">
        <div className="w-8 h-8 mr-2 relative">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-[40%] -translate-x-[-2px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <img src="./src/assets/svg/checkMark.svg" alt="checkMark-icon" />
          </div>
        </div>
        <p className=" text-sm ">مایلم معاوضه کنم</p>
      </div>
      <p className="pt-6 pb-2 text-base font-medium">عنوان آگهی</p>
      <p className=" text-xs text-gray-400 my-4">
        در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.
      </p>
      <input
        onChange={handleChangename}
        placeholder="شلوار مام فیت سایز 38"
        className="flex flex-row items-center justify-between w-full h-10 border border-gray-300 rounded focus:border-black hover:border-black placeholder:pr-4"
      ></input>
      <p className="pt-8 pb-2 text-base font-medium">توضیحات آگهی</p>
      <p className=" text-xs text-gray-400 py-2 leading-8">
        جزئیات و نکات جالب توجه آگهی خود را کامل و دقیق بنویسید. نوشتن شمارهٔ
        تماس در متن آگهی مجاز نیست. حتماً به ساعات پاسخگویی خود اشاره کنید.
      </p>
      <textarea
        onChange={handleChangedescription}
        className="w-full h-[120px] border "
        name="text"
      ></textarea>
      <div className="w-full h-10 flex flex-row-reverse my-8">
        <button
          onClick={handleSubmit}
          className="bg-[#a62626] w-[110px] h-10 px-3 mr-4 text-white text-base font-medium rounded hover:bg-[#a62626e5]"
        >
          <a className="w-14 h-10 " href="/Advertising">
            ارسال آگهی
          </a>
        </button>
        <button className=" w-[100px] h-10 text-gray-400 mr-4 px-6 text-base font-medium border border-gray-500 rounded hover:bg-gray-100 hover:text-gray-800 ">
          <a className="w-14 h-10 text-gray-500 " href="/Advertising">
            انصراف
          </a>
        </button>
      </div>
    </div>
  );
};

export default More_info;
