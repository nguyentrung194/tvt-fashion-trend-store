import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { useProductByPkQuery } from "../../graphql/autogenerate/hooks";
import useMedia from "../../hooks/use-media";
import { useQueryURL } from "../../hooks/use-query-url";

export const DetailProduct = () => {
  const isWide = useMedia("(min-width: 480px)");
  const query = useQueryURL();
  const { data, loading, error } = useProductByPkQuery({
    variables: {
      id: query.get("id") || "",
    },
  });
  const { increase, decrease, addProduct, cartItems } = useContext(CartContext);
  const isInCart = (product: any) => {
    return !!cartItems?.find((item: any) => item.id === product.id);
  };

  if (loading)
    return (
      <div
        style={{
          padding: "200px 14px 200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  if (error) {
    console.log(error);
    return (
      <div
        style={{
          padding: "200px 14px 200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Error!
      </div>
    );
  }
  const product = data?.products_by_pk;
  return (
    <div
      style={{
        padding: "200px 14px 200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(246, 246, 246)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isWide ? "5fr 7fr" : "1fr",
            gridGap: isWide ? "12px" : "6px",
            padding: "110px 14px 0",
            minHeight: "100vh",
            maxWidth: "1244px",
            margin: "auto",
          }}
        >
          <div>
            <img
              style={{
                width: "100%",
                padding: "3px",
              }}
              src={product?.URLImage || ""}
              alt={product?.name}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              {product?.name}
            </div>
            <div>
              <p>{product?.saleOff ? `- ${product.saleOff}%` : ""}</p>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "24px",
                textDecoration: "line-through",
                textAlign: "center",
                height: "24px",
              }}
            >
              {product?.saleOff
                ? `${product.pricing.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}`
                : ``}
              {` `}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "24px",
              }}
            >
              {(product?.saleOff
                ? (product.pricing * (100 - product.saleOff)) / 100
                : product?.pricing || 0
              ).toLocaleString("it-IT", { style: "currency", currency: "VND" })}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!isInCart(product) && (
              <button
                className="button-summit"
                style={{
                  background: "rgb(73, 173, 255)",
                }}
                onClick={() => {
                  addProduct(product);
                }}
              >
                <span style={{ paddingRight: "2px" }}>Add to cart</span>
              </button>
            )}
            {isInCart(product) && (
              <div
                className="button-submit"
                style={{
                  background: "rgb(73, 173, 255)",
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
                      cartItems.findIndex(
                        (item: any) => item.id === product?.id
                      )
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
    </div>
  );
};
