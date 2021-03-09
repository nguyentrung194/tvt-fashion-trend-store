import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMedia from "../../../hooks/use-media";
import { Item } from "./item";

export const Cart = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
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
            ? "calc(var(--vw, 1vw) * 35)"
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
          <div>
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "14px",
                cursor: "pointer",
                outline: "none",
                padding: "5px 10px",
              }}
              onClick={() => {
                localStorage.setItem("products", "[]");
                setItems([]);
              }}
            >
              Clear your cart
            </button>
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
        <div
          style={{
            overflow: "scroll",
            height: isWide ? "70vh" : "55vh",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${
              isWide ? "164px" : "135px"
            }, 1fr))`,
            gridAutoRows: "minmax(270px, 300px)",
            gridGap: isWide ? "6px" : "3px",
          }}
        >
          {items.map((el: any) => {
            return (
              <Item key={el.id} item={el} setItems={setItems} items={items} />
            );
          })}
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: isWide
              ? "calc(var(--vw, 1vw) * 5)"
              : "calc(var(--vw, 1vw) * 10)",
            zIndex: 999,
            background: "rgb(73, 173, 255)",
            borderRadius: "30px",
            width: isWide
              ? "calc(var(--vw, 1vw) * 25)"
              : "calc(var(--vw, 1vw) * 80)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
              color: "rgb(255, 255, 255)",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                display: arr.length ? "flex" : "none",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                color: "rgb(255, 255, 255)",
                borderRadius: "30px",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              to="/checkout"
            >
              Checkout
            </Link>
            <div
              style={{
                padding: "10px",
                background: "rgb(255, 255, 255)",
                color: "rgb(0, 0, 0)",
                borderRadius: "30px",
              }}
            >
              {items
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
            </div>
          </div>
        </div>
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
                return (
                  el.pricing * el.soluong * ((100 - el.saleOff || 0) / 100)
                );
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
