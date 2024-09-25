import React from "react";
import FilterField from "./filterField";
import SideBaritems from "./sideBaritems";
import { priceFilterMin, priceFilterMax } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const Aside = () => {
  const [pricefiltermin, setpricefilterMin] = useRecoilState(priceFilterMin);
  const [pricefiltermax, setpriceFilterMax] = useRecoilState(priceFilterMax);
  return (
    <aside className="w-[248px] h-[627px] pt-24 px-4 fixed">
      <h2 className="text-[0.75rem] font-normal py-2 ">دسته&zwnj;ها</h2>
      <SideBaritems />
      <FilterField text={"محل"} />
      <FilterField text={"قیمت"} />
      <div className="h-[100px] w-full">
        <input
          onChange={(e) => setpricefilterMin(e.target.value)}
          type="number"
          className="w-full h-8 border text-sm rounded "
          placeholder="حداقل"
        />
        <input
          onChange={(e) => setpriceFilterMax(e.target.value)}
          type="number"
          className="w-full h-8 mt-5 text-sm border rounded"
          placeholder="حداکثر"
        />
      </div>
      <FilterField text={"وضعیت آگهی"} />
    </aside>
  );
};

export default Aside;
