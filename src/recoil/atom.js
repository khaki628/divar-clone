import { atom } from "recoil";
export const admodalshow = atom({
  key: "admodalshow",
  default: true,
});

export const logOutbtn = atom({
  key: "logOutbtn",
  default: "دیوار من",
});
export const mainSearch = atom({
  key: "mainSearch",
  default: "",
});

export const priceFilterMax = atom({
  key: "priceFilterMax",
  default: "",
});
export const priceFilterMin = atom({
  key: "priceFilterMin",
  default: "",
});
