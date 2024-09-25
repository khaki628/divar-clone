import React from "react";

const Namadha = () => {
  const logos = [
    {
      src: "./src/assets/img/namad.png",
      alt: "نماد اعتماد",
      id: 1,
    },
    {
      src: "./src/assets/img/kkm.png",
      alt: "نماد کسب و کار اینترنتی",
      id: 2,
    },
    {
      src: "./src/assets/img/neshanmeli.png",
      alt: "نشان ملی اعتماد",
      id: 3,
    },
  ];
  return (
    <div className="w-full h-32 flex justify-center items-center border-y ">
      {logos.map((item) => (
        <img
          src={item.src}
          alt={item.alt}
          key={item.id}
          className="w-14 h-14 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Namadha;
