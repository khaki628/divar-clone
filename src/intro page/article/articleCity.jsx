import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
// import Loading from "/src/assets/animation/loading.jsx";

const ArticleCity = () => {
  const [citys, setcitys] = useState([]);
  useEffect(() => {
    axios.get("http://45.139.10.149:1001/api/provinces").then((res) => {
      const city = res.data.data.recordset;
      setcitys(city);
    });
  }, []);

  return (
    <>
      <div className="w-full flex flex-row flex-wrap ">
        {citys.map((item) => (
          <a
            href="/main-page"
            key={item.province_id}
            className="w-1/5 py-7 px-4 text-center text-[0.875rem] font-medium text-slate-500 hover:text-black "
          >
            {item.province_name}
          </a>
        ))}
      </div>
    </>
  );
};

export default ArticleCity;
