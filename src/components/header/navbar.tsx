import React from "react";
import useMedia from "../../hooks/use-media";

export const Navbar = () => {
  const isWide = useMedia("(min-width: 480px)");
  if (!isWide)
    return (
      <>
        <span>Categories</span>
      </>
    );
  return (
    <>
      <div
        style={{
          paddingTop: "calc(var(--vh, 1vh) * 16)",
          position: "fixed",
          top: 0,
          left: 0,
          background: "white",
          width: "calc(var(--vw, 1vw) * 20)",
          height: "calc(var(--vh, 1vh) * 100)",
          zIndex: -1,
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
    </>
  );
};
