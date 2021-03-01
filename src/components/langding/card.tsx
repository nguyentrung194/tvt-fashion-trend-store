import React, { useState } from "react";

export const Card = ({ props, setItems }: any) => {
  const initSoluong = JSON.parse(
    localStorage.getItem("products") || "[]"
  ).filter((el: any) => el.id === props.id).length;

  const [soluong, setSoluong] = useState(initSoluong || 0);

  return (
    <div
      key={props.key}
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
        alt={props.name}
      />
      <p>{props.saleOff ? `Sale off ${props.saleOff}%` : ""}</p>
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
          {props.saleOff
            ? (props.pricing * (100 - props.saleOff)) / 100
            : props.pricing}
          VNĐ
        </div>
        <button
          onClick={() => {
            const items = [
              ...JSON.parse(localStorage.getItem("products") || "[]"),
              props,
            ];
            const stringItems = JSON.stringify(items);
            localStorage.setItem("products", stringItems ? stringItems : "");
            setSoluong(soluong + 1);
            setItems(items);
          }}
        >
          Add to cart
        </button>
        <div>{soluong}</div>
      </div>
    </div>
  );
};
