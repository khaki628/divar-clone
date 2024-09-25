import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <span className={"loader"}></span>
    </div>
  );
};

export default Loading;
