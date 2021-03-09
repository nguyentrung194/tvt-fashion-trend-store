import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";

export const Product = ({ product }: any) => {
  const {
    increase,
    decrease,
    removeProduct,
    addProduct,
    cartItems,
  } = useContext(CartContext);
  const isInCart = (product: any) => {
    return !!cartItems?.find((item: any) => item.id === product.id);
  };

  return (
    <div
      key={product.key}
      style={{
        border: "2px solid #e7e7e7",
        borderRadius: "4px",
        padding: "6px",
        margin: "6px",
        textAlign: "center",
        position: "relative",
        maxWidth: "150px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          right: "3px",
          backgroundColor: "rgb(255, 173, 94)",
          padding: product.saleOff ? "6px" : "",
          color: "rgb(255, 255, 255)",
          zIndex: 2,
          borderRadius: "30px",
          fontSize: "14px",
        }}
      >
        <p>{product.saleOff ? `- ${product.saleOff}%` : ""}</p>
      </div>
      <img
        style={{
          width: "100%",
          padding: "3px",
        }}
        src={product.URLImage}
        alt={product.name}
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
          {product.name}
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
          {product.saleOff
            ? `${product.pricing.toLocaleString("it-IT", {
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
            {(product.saleOff
              ? (product.pricing * (100 - product.saleOff)) / 100
              : product.pricing
            ).toLocaleString("it-IT", { style: "currency", currency: "VND" })}
          </div>
          {!isInCart(product) && (
            <button
              style={{
                background: "rgb(73, 173, 255)",
                padding: "5px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                outline: "none",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
              onClick={() => {
                addProduct(product);
              }}
            >
              <span style={{ paddingRight: "2px" }}>Cart</span>
              <img
                style={{ width: "14px" }}
                src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
                alt="Cart"
              />
            </button>
          )}
          {isInCart(product) && (
            <div
              style={{
                background: "rgb(73, 173, 255)",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                outline: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                    increase(product);
                  }}
                >
                  +
                </button>
              </div>
              <div style={{ fontSize: "14px", padding: "5px 0px" }}>
                {
                  cartItems[
                    cartItems.findIndex((item: any) => item.id === product.id)
                  ].soluong
                }
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
                    decrease(product);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
