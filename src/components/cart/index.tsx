import React from "react";
import useMedia from "../../hooks/use-media";

export const Cart = () => {
  const isWide = useMedia("(min-width: 480px)");
  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "0px",
          top: "50%",
          zIndex: 9999,
        }}
      >
        Cart
      </div>
    </>
  );
};
