import React, { useRef, useState } from "react";
import { Header } from "../header";
import useMedia from "../../hooks/use-media";
import { Cards } from "./cards";
import { Cart } from "../cart";
import { Navbar } from "./navbar";
import { MainHome } from "./main-home";

export const Home = () => {
  const [byCategory, setByCategory] = useState("");
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const myRef: any = useRef(null);
  const executeScrollToListItem = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });

  const isWide = useMedia("(min-width: 480px)");
  return (
    <>
      <Header setIsOpenCategories={setIsOpenCategories} />
      <MainHome />

      <Cart />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 4fr" : "1fr",
          margin: isWide ? "18px" : "3px",
        }}
      >
        <div>
          <div style={{ marginTop: "-120px" }} ref={myRef}></div>
          <div style={{ height: "120px" }}></div>
          <Navbar
            setByCategory={setByCategory}
            executeScrollToListItem={executeScrollToListItem}
            isOpenCategories={isOpenCategories}
            setIsOpenCategories={setIsOpenCategories}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${
              isWide ? "164px" : "135px"
            }, 1fr))`,
            gridAutoRows: "minmax(270px, 300px)",
            gridGap: isWide ? "6px" : "3px",
            minHeight: "100vh",
          }}
        >
          <Cards byCategory={byCategory} setByCategory={setByCategory} />
        </div>
      </div>
    </>
  );
};
