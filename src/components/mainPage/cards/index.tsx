import React from "react";
import useMedia from "../../../hooks/use-media";
import { FilterProduct } from "../../header/fillter";
import { List } from "./list";

export const ListProducts = () => {
  const isWide = useMedia("(min-width: 480px)");
  return (
    <div>
      <div style={{ minHeight: "80vh", position: "relative" }}>
        <List />
      </div>
    </div>
  );
};
