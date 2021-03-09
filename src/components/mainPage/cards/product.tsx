import React from "react";

export const Product = ({ item }: any) => {
  return (
    <div
      key={item.key}
      style={{
        border: "2px solid #e7e7e7",
        borderRadius: "4px",
        padding: "6px",
        margin: "6px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          right: "3px",
          backgroundColor: "rgb(255, 173, 94)",
          padding: item.saleOff ? "6px" : "",
          color: "rgb(255, 255, 255)",
          zIndex: 2,
          borderRadius: "30px",
          fontSize: "14px",
        }}
      >
        <p>{item.saleOff ? `- ${item.saleOff}%` : ""}</p>
      </div>
      <img
        style={{
          width: "100%",
          padding: "3px",
        }}
        src={item.URLImage}
        alt={item.name}
      />

      <div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "20px",
            textAlign: "start",
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "24px",
            textDecoration: "line-through",
            textAlign: "start",
            height: "24px",
          }}
        >
          {item.saleOff
            ? `${item.pricing.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}`
            : ``}
          {` `}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "24px",
            }}
          >
            {(item.saleOff
              ? (item.pricing * (100 - item.saleOff)) / 100
              : item.pricing
            ).toLocaleString("it-IT", { style: "currency", currency: "VND" })}
          </div>
        </div>
      </div>
    </div>
  );
};
