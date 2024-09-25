import React from "react";
import { useEffect, useState } from "react";
import SingleIItem from "./singleIItem";
import Loading from "/src/assets/animation/loading.jsx";
import axios from "axios";
import { mainSearch, priceFilterMin, priceFilterMax } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const Article = () => {
  const [searchInput, setSearchInput] = useRecoilState(mainSearch);
  const [pricefiltermin, setpricefiltermin] = useRecoilState(priceFilterMin);
  const [pricefiltermax, setpricefiltermax] = useRecoilState(priceFilterMax);
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://45.139.10.149:1001/api/products")
      .then((res) => {
        const _products = res.data.data.recordset;
        setproducts(_products);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          setloading(false);
        }, 1000);
      });
  }, []);
  return loading ? (
    <div className="w-full h-full relative right-40 bottom-16">
      <Loading />
    </div>
  ) : (
    <article className="w-[1120px] h-full  mt-[100px] mr-[300px] ">
      <p className=" text-left pb-4 text-xs text-gray-400 font-normal">
        دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران
      </p>

      <div className="w-[1130px] h-[184px] flex flex-row flex-wrap">
        {products
          .filter((item) => {
            return searchInput.toLocaleLowerCase() === ""
              ? item
              : item.product_name.toLocaleLowerCase().includes(searchInput);
          }) //-------------------------------------------------------------- kamel nist
          // .filter((item) => {
          //   return pricefiltermin && pricefiltermax === ""
          //     ? item
          //     : item.product_price.includes(pricefiltermin) &&
          //         item.product_price.includes(pricefiltermax);
          // })
          //-----------------------------------------------------------------
          .map((item) => (
            <SingleIItem
              title={item.product_name}
              price={item.product_price}
              location={item.product_description}
              alt={item.product_name}
              key={item.product_id}
            />
          ))}
      </div>
    </article>
  );
};

export default Article;
