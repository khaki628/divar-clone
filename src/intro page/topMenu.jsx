import React from "react";

const TopMenu = () => {
  const topMenu = [
    { name: "ثبت اگهی", href: "/Advertising", id: 1 },
    { name: "درباره دیوار", href: "#", id: 2 },
    { name: "دریافت برنامه", href: "#", id: 3 },
    { name: "اتاق خبر", href: "#", id: 4 },
    { name: "پشتیبانی", href: "#", id: 5 },
  ];
  return (
    <>
      <ul className="w-full flex  flex-row items-center justify-around border-b p-[10px] ">
        {topMenu.map((item) => (
          <li key={item.id} className="text-xs text-slate-500 ">
            <a routate={"/"} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopMenu;
