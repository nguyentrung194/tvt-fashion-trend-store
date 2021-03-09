import React from "react";
import useMedia from "../../../hooks/use-media";
import { FilterProduct } from "./fillter";
import { List } from "./list";

export const ListProducts = () => {
  const isWide = useMedia("(min-width: 480px)");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isWide ? "1fr 4fr" : "1fr",
        margin: isWide ? "18px" : "3px",
      }}
    >
      <FilterProduct />
      <div style={{ minHeight: "80vh" }}>
        <List />
      </div>
    </div>
  );
};
