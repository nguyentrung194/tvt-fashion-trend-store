import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/cart-context";
import useMedia from "../../../hooks/use-media";
import { Product } from "./product";

export const Cart = () => {
  const isWide = useMedia("(min-width: 480px)");
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { cartItems, itemCount, total, clearCart } = useContext(CartContext);

  return (
    <>
      <div
        className={`cart-container cart-container-${isOpenCart ? "visible" : "hidden"}`}
        style={{
          width: isWide
            ? "calc(var(--vw, 1vw) * 35)"
            : "calc(var(--vw, 1vw) * 100)",
          right: isOpenCart ? 0 : (isWide
            ? "calc(var(--vw, 1vw) * (-40))"
            : "calc(var(--vw, 1vw) * (-110))"),
        }}
      >
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
            <div style={{ paddingLeft: "5px" }}>{itemCount} Item</div>
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
                clearCart();
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
            height: "75vh",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${isWide ? "164px" : "135px"
              }, 1fr))`,
            gridAutoRows: "minmax(270px, 300px)",
            gridGap: isWide ? "6px" : "3px",
          }}
        >
          {cartItems.map((el: any) => {
            return <Product key={el.id} product={el} />;
          })}
        </div>
        <div
          style={{
            position: "relative",
            // bottom: "10px",
            // right: isWide
            //   ? "calc(var(--vw, 1vw) * 5)"
            //   : "calc(var(--vw, 1vw) * 10)",
            // zIndex: 999,
            background: "rgb(73, 173, 255)",
            borderRadius: "30px",
            margin: '30px'
            // width: isWide
            //   ? "calc(var(--vw, 1vw) * 25)"
            //   : "calc(var(--vw, 1vw) * 80)",
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
                display: itemCount ? "flex" : "none",
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
              {total.toLocaleString("it-IT", {
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
          opacity: isOpenCart ? "0" : "1",
          position: "fixed",
          right: isWide ? "0px" : "5px",
          bottom: isWide ? "50%" : "10px",
          zIndex: 999,
          background: "rgb(73, 173, 255)",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          width: "auto",
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <div
          style={{
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
            <div style={{ paddingRight: "5px" }}>{itemCount} Item</div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
              alt="Cart"
            />
          </div>
          <div
            style={{
              padding: "5px",
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
              borderRadius: "5px",
            }}
          >
            {total.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      </button>
    </>
  );
};
