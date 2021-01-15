import React from "react";
import { Header } from "../header";
import { Card } from "./card";
import useMedia from "../../hooks/use-media";

const Navbar = () => {
  const isWide = useMedia("(min-width: 480px)");
  if (!isWide) return <></>;
  return (
    <>
      <div
        style={{
          paddingTop: "calc(var(--vh, 1vh) * 15)",
          position: "fixed",
          top: 0,
          left: 0,
          background: "white",
          width: "calc(var(--vw, 1vw) * 20)",
          height: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Women Dress
        </div>
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Outer Wear
        </div>
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Pants
        </div>
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Tops
        </div>
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Skirts
        </div>
        <div
          style={{
            padding: "12px 12px 12px 25px",
            color: "#03713d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Shirts
        </div>
      </div>
      <div></div>
    </>
  );
};

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
        <Navbar />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${
              isWide ? "192px" : "135px"
            }, 1fr))`,
            gridAutoRows: "auto",
            gridGap: isWide ? "6px" : "3px",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
