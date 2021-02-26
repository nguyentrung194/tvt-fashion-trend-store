import React, { useRef, useState } from "react";
import { Header } from "../header";
import useMedia from "../../hooks/use-media";
import { Cards } from "./cards";

export const Home = () => {
  const [byCategory, setByCategory] = useState("");

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
      <Header
        setByCategory={setByCategory}
        executeScrollToListItem={executeScrollToListItem}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 4fr" : "1fr",
          margin: isWide ? "18px" : "3px",
        }}
      >
        <div style={{ marginTop: "-100px" }}>
          <div ref={myRef}></div>
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
