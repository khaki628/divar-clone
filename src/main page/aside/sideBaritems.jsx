import React from "react";
import SideBarItem from "./sideBar";
const SideBaritems = () => {
  return (
    <>
      <ul>
        <SideBarItem
          src={"./src/assets/svg/mansion.svg"}
          text={"املاک"}
          alt={"realEstate-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/car.svg"}
          text={"وسایل نقلیه"}
          alt={"car-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/cellphone.svg"}
          text={"کالای دیجیتال"}
          alt={"cellphone-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/reading-lamp.svg"}
          text={"خانه و آشپزخانه"}
          alt={"lamp-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/paint.svg"}
          text={"خدمات"}
          alt={"paint-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/watch.svg"}
          text={"وسایل شخصی"}
          alt={"watch-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/dice.svg"}
          text={"سرگرمی و فراغت"}
          alt={"dice-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/user-social.svg"}
          text={"اجتماعی"}
          alt={"social-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/chair.svg"}
          text={"تجهیزات و صنعتی"}
          alt={"chair-icon"}
        />
        <SideBarItem
          src={"./src/assets/svg/business-bag.svg"}
          text={"استخدام و کاریابی"}
          alt={"business-bag-icon"}
        />
      </ul>
    </>
  );
};

export default SideBaritems;
