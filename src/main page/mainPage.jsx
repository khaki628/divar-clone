import React, { useEffect } from "react";
import Header from "./header/header";
import Aside from "./aside/aside";
import Article from "./article/article";
import axios from "axios";
import { admodalshow } from "../recoil/atom";
import { logOutbtn } from "../recoil/atom";
import { useRecoilState } from "recoil";
import Login from "../loginpage/login";
const MainPage = () => {
  const [adpageModal, setadpageModal] = useRecoilState(admodalshow);
  const [LogOutbtn, setlogoutbtn] = useRecoilState(logOutbtn);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://45.139.10.149:1001/api/products", {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .post("http://45.139.10.149:1001/api/authorize", {
        token,
      })
      .then((res) => {
        console.log(res);
        setlogoutbtn("خروج از حساب");
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
      });
  }, []);
  return (
    <>
      <div className="w-full h-screen relative ">
        <Header />
        <section className="min-w-[992px] max-w-[1440px] h-full flex flex-row mx-[231px]">
          <Aside />
          <Article />
        </section>
      </div>
      <div
        hidden={adpageModal}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
      >
        <Login />
      </div>
    </>
  );
};

export default MainPage;
