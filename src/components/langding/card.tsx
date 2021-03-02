import React from "react";

export const Card = ({ item, setItems, items }: any) => {
  return (
    <div
      key={item.key}
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
        src={item.URLImage}
        alt={item.name}
      />
      <p>{item.saleOff ? `Sale off ${item.saleOff}%` : ""}</p>
      <div>
        <div style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px" }}>
          {item.name}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "24px",
            textDecoration: "line-through",
          }}
        >
          {item.isSale ? `${item.pricing}VNĐ` : ``}
        </div>
        <div
          style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "24px" }}
        >
          {item.saleOff
            ? (item.pricing * (100 - item.saleOff)) / 100
            : item.pricing}
          VNĐ
        </div>
        <button
          onClick={() => {
            const itemsIn = [
              ...JSON.parse(localStorage.getItem("products") || "[]"),
            ].find((el) => el.id === item.id)
              ? [...JSON.parse(localStorage.getItem("products") || "[]")].map(
                  (element: any) => {
                    if (element.id === item.id) {
                      return {
                        ...element,
                        soluong: element.soluong + 1,
                      };
                    }
                    return element;
                  }
                )
              : [
                  ...JSON.parse(localStorage.getItem("products") || "[]"),
                  { ...item, soluong: 1 },
                ];
            const stringItems = JSON.stringify(itemsIn);
            setItems(itemsIn);
            localStorage.setItem("products", stringItems ? stringItems : "[]");
          }}
        >
          Add to cart
        </button>
        <div>{items.find((e: any) => e.id === item.id)?.soluong || 0}</div>
      </div>
    </div>
  );
};
