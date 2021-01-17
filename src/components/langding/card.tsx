import React from "react";

export const Card = ({ props }: any) => {
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
        src={props.URLImage}
        alt="product"
      />
      <p>{props.isSale ? `Sale off ${props.saleOff}%` : ""}</p>
      <div>
        <div style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px" }}>
          {props.name}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "24px",
            textDecoration: "line-through",
          }}
        >
          {props.isSale ? `${props.pricing}VNĐ` : ``}
        </div>
        <div
          style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "24px" }}
        >
          {props.isSale
            ? (props.pricing * (100 - props.saleOff)) / 100
            : props.pricing}
          VNĐ
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
