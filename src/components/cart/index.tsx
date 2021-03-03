import React, { useState } from "react";
import useMedia from "../../hooks/use-media";
import { Item } from "./item";

export const Cart = ({ items, setItems }: any) => {
  const isWide = useMedia("(min-width: 480px)");
  const [isOpenCart, setIsOpenCart] = useState(false);

  if (!localStorage.getItem("products")) localStorage.setItem("products", "[]");
  const sl = items.map((item: { id: any }) => [item.id, item]).values();
  const sl2: any = new Map(sl);
  const arr = [...sl2];

  return (
    <>
      <div
        style={{
          display: isOpenCart ? "" : "none",
          height: isWide
            ? "calc(var(--vh, 1vh) * 100 )"
            : "calc(var(--vh, 1vh) * 70 )",
          width: isWide
            ? "calc(var(--vw, 1vw) * 30)"
            : "calc(var(--vw, 1vw) * 100)",
          background: "rgb(255, 255, 255)",
          position: "fixed",
          right: 0,
          bottom: 0,
          zIndex: 9999,
          boxShadow: `${
            isWide
              ? "-10px 0 30px rgba(136, 136, 136, 0.329)"
              : "0 calc(var(--vh, -1vh) * 30) 0 rgba(0, 0, 0, 0.4)"
          }`,
        }}
      >
        <div
          style={{
            display: !isWide && isOpenCart ? "" : "none",
            position: "fixed",
            top: 0,
            right: 0,
            width: "calc(var(--vw, 1vw) * 100)",
            height: "calc(var(--vh, 1vh) * 30)",
            zIndex: 999,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
              alt="Cart"
            />
            <div style={{ paddingLeft: "5px" }}>{arr.length} Item</div>
          </div>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "20px",
              cursor: "pointer",
              outline: "none",
              padding: "5px 10px",
            }}
            onClick={() => {
              setIsOpenCart(false);
            }}
          >
            X
          </button>
        </div>
        {items.map((el: any) => {
          return <Item key={el.id} el={el} setItems={setItems} />;
        })}
      </div>
      <button
        onClick={() => {
          setIsOpenCart(true);
        }}
        style={{
          display: isOpenCart ? "none" : "",
          position: "fixed",
          right: isWide ? "0px" : "calc(var(--vw, 1vw) * 10)",
          bottom: isWide ? "50%" : "10px",
          zIndex: 999,
          background: "rgb(73, 173, 255)",
          padding: isWide ? "5px" : "0",
          borderRadius: isWide ? "5px" : "30px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          width: isWide ? "auto" : "calc(var(--vw, 1vw) * 80)",
        }}
      >
        <div
          style={{
            display: isWide ? "" : "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isWide ? "space-between" : "center",
              margin: "5px",
            }}
          >
            <div style={{ paddingRight: "5px" }}>{arr.length} Item</div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
              alt="Cart"
            />
          </div>
          <div
            style={{
              padding: isWide ? "5px" : "10px",
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
              borderRadius: isWide ? "5px" : "30px",
            }}
          >
            {items
              .map((el: any) => {
                return el.pricing * el.soluong;
              })
              .reduce(
                (accumulator: any, currentValue: any) =>
                  accumulator + currentValue,
                0
              )
              .toLocaleString("it-IT", { style: "currency", currency: "VND" })}
          </div>
        </div>
      </button>
    </>
  );
};
