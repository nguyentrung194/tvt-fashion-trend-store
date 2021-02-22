import React from "react";
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
  if (!isWide)
    return (
      <>
        <span>Categories</span>
      </>
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
