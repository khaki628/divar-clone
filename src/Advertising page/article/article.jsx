import React from "react";
import Title from "./title/title";
import Location from "./location/location";
import ImgInput from "./img-Input/imgInput";
import ChatSeting from "./chat/chatSeting";
import CallW from "./call-way/callW";
import More_info from "./more-info/more_info";
import Identity from "./Identity/identity";

const Article = () => {
  return (
    <article className="w-[31.5rem] px-2 flex flex-col mt-[95px]">
      <p className="text-xl font-medium py-8">ثبت آگهی</p>
      <Title />
      <Location />
      <ImgInput />
      <Identity /> {/* kar darim baat 3 */}
      <ChatSeting />
      <CallW />
      <More_info />
    </article>
  );
};

export default Article;
