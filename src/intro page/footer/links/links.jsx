import React from "react";

const Links = () => {
  const links = [
    {
      src: "./src/assets/svg/twitter-logo.svg",
      alt: "twitter-logo",
      href: "#",
      id: 1,
    },
    {
      src: "./src/assets/svg/instagram-logo.svg",
      alt: "instagram-logo",
      href: "#",
      id: 2,
    },
    {
      src: "./src/assets/svg/linkedin-svg.svg",
      alt: "linkedin-logo",
      href: "#",
      id: 3,
    },
    {
      src: "./src/assets/svg/aparat-svg.svg",
      alt: "aparat-logo",
      href: "#",
      id: 4,
    },
  ];
  return (
    <div className="flex flex-row justify-center  ">
      {links.map((item) => (
        <a key={item.id} href={item.href}>
          <img
            src={item.src}
            alt={item.alt}
            className="size-[19px] m-5 hover:fill-black "
          />
        </a>
      ))}
    </div>
  );
};

export default Links;
