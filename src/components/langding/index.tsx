import React, { useContext, useRef, useState } from "react";
import { Header } from "../header";
import useMedia from "../../hooks/use-media";
import { Cards } from "./cards";
import { Cart } from "../cart";
import { Navbar } from "./navbar";
import { MainHome } from "./main-home";
import { isOpenContext } from "../../App";

export const Home = () => {
  const [byCategory, setByCategory] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const { isOpen } = useContext(isOpenContext);

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
      <Header setIsOpenCategories={isOpen.set} />
      <MainHome />

      <Cart items={items} setItems={setItems} />
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
            isOpenCategories={isOpen.get}
            setIsOpenCategories={isOpen.set}
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
          <Cards
            byCategory={byCategory}
            setByCategory={setByCategory}
            setItems={setItems}
            items={items}
          />
        </div>
      </div>
    </>
  );
};
