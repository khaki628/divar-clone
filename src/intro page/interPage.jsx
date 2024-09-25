import React from "react";
import Logo from "./logo";
import TopMenu from "./topMenu";
import SectionText from "./sectionText";
import SearchBar from "./search";
import Article from "./article/article";
import ArticleTitle from "./article/articleTitle";
import Footer from "./footer/footer";
const InterPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[566px] h-full bg-white flex flex-col items-center ">
        <Logo />
        <TopMenu />
        <SectionText />
        <SearchBar />
        <ArticleTitle />
        <Article />
        <Footer />
      </div>
    </div>
  );
};

export default InterPage;
