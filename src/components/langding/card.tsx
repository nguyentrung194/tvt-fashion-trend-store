import React from "react";
import imageProduct from "./image-product.jpg";

export const Card = () => {
  return (
    <div
      style={{
        border: "2px solid #e7e7e7",
        borderRadius: "4px",
        padding: "6px",
        margin: "6px",
        textAlign: "center",
      }}
    >
      <img
        style={{
          width: "100%",
          padding: "3px",
        }}
        src={imageProduct}
        alt="product"
      />
      <p>Sale off 20%</p>
      <div>
        <div style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px" }}>
          Áo thun
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "24px",
            textDecoration: "line-through",
          }}
        >
          200.000đ
        </div>
        <div
          style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "24px" }}
        >
          160.000đ
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
