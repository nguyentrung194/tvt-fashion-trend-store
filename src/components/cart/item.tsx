import React from "react";

export const Item = ({ el, setItems }: any) => {
  return (
    <div>
      <div>{el.name}</div>
      <div>{el.pricing}</div>
      <div>{el.soluong}</div>
      <div>
        <img
          style={{
            width: "60px",
            padding: "3px",
          }}
          src={el.URLImage}
          alt={el.name}
        />
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
            outline: "none",
          }}
          onClick={() => {
            const items = [
              ...JSON.parse(localStorage.getItem("products") || "[]"),
            ]
              .filter(
                (element: any) => element.id !== el.id || element.soluong > 1
              )
              .map((element: any) => {
                if (element.id === el.id) {
                  return {
                    ...element,
                    soluong: element.soluong - 1,
                  };
                }
                return element;
              });
            const stringItems = JSON.stringify(items);
            localStorage.setItem("products", stringItems ? stringItems : "");
            setItems(items);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
            outline: "none",
          }}
          onClick={() => {
            const items = [
              ...JSON.parse(localStorage.getItem("products") || "[]"),
            ].map((element: any) => {
              if (element.id === el.id) {
                return {
                  ...element,
                  soluong: element.soluong + 1,
                };
              }
              return element;
            });

            const stringItems = JSON.stringify(items);
            localStorage.setItem("products", stringItems ? stringItems : "[]");
            setItems(items);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
            outline: "none",
          }}
          onClick={() => {
            const items = [
              ...JSON.parse(localStorage.getItem("products") || "[]"),
            ].filter((element: any) => element.id !== el.id);

            const stringItems = JSON.stringify(items);
            localStorage.setItem("products", stringItems ? stringItems : "[]");
            setItems(items);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};
