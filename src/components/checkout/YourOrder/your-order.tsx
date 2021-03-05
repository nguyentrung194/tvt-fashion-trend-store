import React from "react";

export const YourOrderItem = () => {
  const products: any = JSON.parse(localStorage.getItem("products") || "[]");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ paddingLeft: "18px", fontSize: "18px" }}>Your Order</h1>
        <div
          style={{
            borderBottom: "2px solid rgb(155, 155, 155)",
            width: "100%",
          }}
        >
          {products.map((el: any) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 7fr 3fr",
                  gap: "8px",
                  padding: "8px",
                  marginTop: "12px",
                  borderBottom: "1px solid rgb(230, 230, 230)",
                }}
              >
                <span>{el.soluong}</span>
                <span>x</span>
                <span>{el.name}</span>
                <span style={{ textAlign: "right" }}>
                  {(el.pricing * el.soluong).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            padding: "8px",
            marginTop: "12px",
            width: "100%",
          }}
        >
          <span style={{ padding: "8px" }}>Sub Total</span>
          <span style={{ textAlign: "right", padding: "8px" }}>
            {products
              .map((el: any) => {
                return (
                  el.pricing * el.soluong * ((100 - el.saleOff || 0) / 100)
                );
              })
              .reduce(
                (accumulator: any, currentValue: any) =>
                  accumulator + currentValue,
                0
              )
              .toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
          </span>
          <span style={{ padding: "8px" }}>Delivery Fee</span>
          <span style={{ textAlign: "right", padding: "8px" }}>
            {(0).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          <span style={{ padding: "8px" }}>Discount</span>
          <span style={{ textAlign: "right", padding: "8px" }}>
            {(0).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};
