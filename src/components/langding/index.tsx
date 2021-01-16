import React from "react";
import { Header } from "../header";
import useMedia from "../../hooks/use-media";
import { Cards } from "./cards";

export const Home = () => {
  const isWide = useMedia("(min-width: 480px)");
  return (
    <>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 4fr" : "1fr",
          margin: isWide ? "18px" : "3px",
        }}
      >
        <div></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${
              isWide ? "164px" : "135px"
            }, 1fr))`,
            gridAutoRows: "auto",
            gridGap: isWide ? "6px" : "3px",
          }}
        >
          <Cards />
        </div>
      </div>
    </>
  );
};
