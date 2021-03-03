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
        }}
      >
        <p>{item.saleOff ? `${item.saleOff}%` : ""}</p>
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
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "24px",
            textAlign: "start",
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "24px",
            textDecoration: "line-through",
            textAlign: "start",
          }}
        >
          {item.saleOff ? `${item.pricing}VNĐ` : ``}
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
          {!items.find((e: any) => e.id === item.id) ? (
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
              }}
              onClick={() => {
                const itemsIn = [
                  ...JSON.parse(localStorage.getItem("products") || "[]"),
                ].find((el) => el.id === item.id)
                  ? [
                      ...JSON.parse(localStorage.getItem("products") || "[]"),
                    ].map((element: any) => {
                      if (element.id === item.id) {
                        return {
                          ...element,
                          soluong: element.soluong + 1,
                        };
                      }
                      return element;
                    })
                  : [
                      ...JSON.parse(localStorage.getItem("products") || "[]"),
                      { ...item, soluong: 1 },
                    ];
                const stringItems = JSON.stringify(itemsIn);
                setItems(itemsIn);
                localStorage.setItem(
                  "products",
                  stringItems ? stringItems : "[]"
                );
              }}
            >
              Cart
              <img
                style={{ width: "18px" }}
                src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
                alt="Cart"
              />
            </button>
          ) : (
            <div
              style={{
                background: "rgb(73, 173, 255)",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                outline: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
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
                    const items = [
                      ...JSON.parse(localStorage.getItem("products") || "[]"),
                    ].map((element: any) => {
                      if (element.id === item.id) {
                        return {
                          ...element,
                          soluong: element.soluong + 1,
                        };
                      }
                      return element;
                    });

                    const stringItems = JSON.stringify(items);
                    localStorage.setItem(
                      "products",
                      stringItems ? stringItems : "[]"
                    );
                    setItems(items);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                {items.find((e: any) => e.id === item.id)?.soluong || 0}
              </div>
              <div>
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
                    const items = [
                      ...JSON.parse(localStorage.getItem("products") || "[]"),
                    ]
                      .filter(
                        (element: any) =>
                          element.id !== item.id || element.soluong > 1
                      )
                      .map((element: any) => {
                        if (element.id === item.id) {
                          return {
                            ...element,
                            soluong: element.soluong - 1,
                          };
                        }
                        return element;
                      });
                    const stringItems = JSON.stringify(items);
                    localStorage.setItem(
                      "products",
                      stringItems ? stringItems : ""
                    );
                    setItems(items);
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
