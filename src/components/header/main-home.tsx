import React from "react";
import useMedia from "../../hooks/use-media";

export const MainHome = () => {
  const isWide = useMedia("(min-width: 480px)");
  return (
    <>
      <div
        style={{
          padding: "200px 14px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fbackground.png?alt=media&token=1d07174b-df32-437e-9abb-39b94a96a261)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginLeft: isWide ? "calc(var(--vw, 1vw) * 20)" : "",
        }}
      >
        <h1
          style={{
            margin: "calc(var(--vh, 1vh) * 10) 0 calc(var(--vh, 1vh) * 5)",
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: "36px",
          }}
        >
          SHOP YOUR DESIGNER DRESSES
        </h1>
        <p
          style={{
            margin: "0 0 60px",
            color: "hsla(0, 0%, 0%, 0.7)",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "28px",
          }}
        >
          Ready to wear dresses tailored for you from online. Hurry up while
          stock lasts.
        </p>
        <div style={{ height: "calc(var(--vh, 1vh) * 30)" }}>
          <input
            style={{
              margin: "6px 4px",
              padding: "8px 25px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "hsla(0, 0%, 0%, 0.12)",
              outline: "none",
              boxShadow: "none",
            }}
            type="search"
            value=""
            placeholder="Tìm kiếm sản phẩm..."
          />
        </div>
      </div>
    </>
  );
};
