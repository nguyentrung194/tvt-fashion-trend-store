import React, { useState } from "react";
import useMedia from "../../hooks/use-media";

export const Category = (props: any) => {
  return (
    <div
      style={{
        padding: "12px 12px 12px 25px",
        color: "#03713d",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};

export const categoriesData = [
  "Women Dress",
  "Outer Wear",
  "Pants",
  "Tops",
  "Skirts",
  "Shirts",
];

export const Navbar = (props: any) => {
  const isWide = useMedia("(min-width: 480px)");
  const [isOpen, setIsOpen] = useState(false);
  if (!isWide)
    return (
      <div>
        <span
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Categories
        </span>
        <div
          style={{
            paddingTop: "calc(var(--vh, 1vh) * 16)",
            position: "fixed",
            top: 0,
            left: 0,
            background: "white",
            width: "calc(var(--vw, 1vw) * 80)",
            height: "calc(var(--vh, 1vh) * 100)",
            zIndex: -1,
            display: isOpen ? "" : "none",
            boxShadow: "calc(var(--vw, 1vw) * 20) 0 rgba(136, 136, 136, 0.329)",
          }}
        >
          <button
            style={{
              position: "fixed",
              top: 70,
              right: "calc(var(--vw, 1vw) * 23)",
              padding: "20px",
              border: "none",
              background: "transparent",
              fontSize: "30px",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
          {categoriesData.map((el, id) => {
            return (
              <Category
                onClick={() => {
                  setIsOpen(false);
                  props.setByCategory(el);
                  window.scrollTo(0, window.innerHeight - 40);
                }}
                key={id}
                title={el}
              />
            );
          })}
        </div>
      </div>
    );
  return (
    <>
      <div
        style={{
          paddingTop: "calc(var(--vh, 1vh) * 16)",
          position: "fixed",
          top: 0,
          left: 0,
          background: "white",
          width: "calc(var(--vw, 1vw) * 20)",
          height: "calc(var(--vh, 1vh) * 100)",
          zIndex: -1,
        }}
      >
        {categoriesData.map((el, id) => {
          return (
            <Category
              onClick={() => {
                props.setByCategory(el);
                window.scrollTo(0, window.innerHeight - 70);
              }}
              key={id}
              title={el}
            />
          );
        })}
      </div>
    </>
  );
};
