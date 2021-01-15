import React from "react";

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
        src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fimage-product.jpg?alt=media&token=aa684176-a048-42f7-b52f-379aca5beaf8"
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
