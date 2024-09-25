import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { admodalshow } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [header, setheader] = useState("ورود به حساب کاربری");
  const [title, settitle] = useState("قبل از ثبت آگهی وارد حساب خود شوید");
  const [statuse, setstatus] = useState("لطفا شمار موبایل خود را وارد کنید");
  const [goLogin, setgologin] = useState(true);
  const [inter, setinter] = useState(false);
  const [adpageModal, setadpageModal] = useRecoilState(admodalshow);
  const [numberStat, setnumberStat] = useState("شماره موبایل");
  const [passStat, setpassStat] = useState("رمز ورود");
  const [mode, setmode] = useState(true);

  //-------------formik---------------------------------------
  const formik = useFormik({
    initialValues: {
      number: "",
      password: "",
    },
    onSubmit: (values) => {
      const _number = values.number.trim();
      const _password = values.password.trim();
      mode
        ? axios
            .post("http://45.139.10.149:1001/api/login", {
              phone: _number,
              password: _password,
            })
            .then((res) => {
              const token = res.data.accessToken;
              console.log(res);
              localStorage.setItem("token", token);
              navigate("/Advertising");
            })
            .catch((err) => {
              console.error(err);
              setstatus("اطلاعات شما صحیح نمیباشد");
            })
        : axios
            .post("http://45.139.10.149:1001/api/signup", {
              phone: _number,
              password: _password,
            })
            .then((res) => {
              console.log(res);
              setheader("ورود به حساب کاربری");
              settitle("قبل از ثبت آگهی وارد حساب خود شوید");
              setstatus("حساب کاربری شما با موفقیت ساخته شد");
              setgologin(!goLogin);
              setinter(!inter);
              setmode(!mode);
            })
            .catch((err) => {
              console.error(err);
              setstatus("اطلاعات شما صحیح نمیباشد");
            });
    },

    validationSchema: Yup.object({
      number: Yup.string()
        .min(5, "حداقل 11 کاراکتر")
        .max(15)
        .required("شماره خود را وارد کنید"),
      password: Yup.string()
        .min(5, "حداقل 8 کاراکتر")
        .max(15)
        .required("رمز خود را وارد کنید"),
    }),
  });

  //-------------formik---------------------------------------end--------------------
  const handelclose = () => {
    setadpageModal(!adpageModal);
  };

  const handelmodal = () => {
    setheader("ثبت حساب جدید");
    settitle("جهت ثبت نام لطفا شماره موبایل و رمز خود را وارد کنید");
    setstatus("رمز باید حداقل هشت کاراکتر باشد:");
    setgologin(!goLogin);
    setinter(!inter);
    setmode(!mode);
  };

  const handelLogin = () => {
    setheader("ورود به حساب کاربری");
    settitle("قبل از ثبت آگهی وارد حساب خود شوید");
    setstatus("لطفا شمار موبایل خود را وارد کنید");
    setgologin(!goLogin);
    setinter(!inter);
    setmode(!mode);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center drop-shadow-xl backdrop-blur-sm transition">
      <div className="flex flex-col items-center justify-center bg-[#fff] w-[488px] h-[458px] rounded">
        <header className="flex flex-row items-center justify-between p-8 w-full h-[92px] border-b">
          <p className="text-[1.125rem] font-medium">{header}</p>
          <button
            onClick={handelclose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray "
          >
            <img
              className="w-5 h-5 "
              src="./src/assets/svg/close-x.svg"
              alt="close-icon"
            />
          </button>
        </header>
        <form
          onSubmit={formik.handleSubmit}
          className="w-[88%] h-[302px]flex flex-col items-center justify-center"
        >
          <p className="text-base font-medium py-8">{title}</p>

          {formik.touched.number && formik.errors.number ? (
            <p className="text-sm text-gray-400">
              شماره حداقل باید 11 کاراکتر باشد
            </p>
          ) : (
            <p className="text-sm text-gray-400">{statuse}</p>
          )}
          {formik.touched.password && formik.errors.password ? (
            <p className="text-sm text-gray-400">
              رمز باید حداقل 8 کاراکتر باشد
            </p>
          ) : null}
          <div className="w-full h-10 flex flex-row items-center border rounded mt-5 ">
            <input
              className="border w-11/12 h-full border-none placeholder:pr-4 placeholder:text-right focus:outline-none text-left "
              type="string"
              id="number"
              name="number"
              value={formik.values.number}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={numberStat}
            />
            <p className="w-4 h-4 text-[0.85rem] pr-1">98+</p>
          </div>
          <div className="w-full h-10 flex flex-row items-center border rounded mt-5">
            <input
              className="border w-full h-full border-none placeholder:pr-4 placeholder:text-right focus:outline-none text-left pl-4 "
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder={passStat}
            />
          </div>

          <p className="my-4 text-sm text-gray-400">
            <span className="text-red-700">شرایط استفاده از خدمات </span> و{" "}
            <span className="text-red-700">حریم خصوصی </span>
            دیوار را میپذیرم
          </p>
          <footer className="w-full h-[64px] flex flex-row-reverse items-center justify-between border-t ">
            <button
              hidden={inter}
              type="button"
              onClick={formik.handleSubmit}
              className="bg-[#a62626] text-white text-center rounded h-10 w-24 font-medium ml-4"
            >
              ورود
            </button>
            <button
              hidden={inter}
              onClick={handelmodal}
              className="bg-[#a62626] text-white text-center rounded h-10 w-24 font-medium mr-4 ml-4"
            >
              ثبت نام
            </button>
            <button
              hidden={goLogin}
              onClick={formik.handleSubmit}
              className="bg-[#a62626] text-white text-center rounded h-10 w-24 font-medium mr-4 ml-4"
            >
              ثبت نام
            </button>
            <button
              hidden={goLogin}
              onClick={handelLogin}
              className="bg-[#a62626] text-white text-center rounded h-10 w-24 font-medium mr-4 ml-4"
            >
              بازگشت
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Login;
