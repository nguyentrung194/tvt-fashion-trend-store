import React, { useRef, useState } from "react";
import { Header } from "../header";
import { MainHome } from "./main-home";
import { ListProducts } from "./cards";
import { Cart } from "./cart";

export const Home = () => {
  return (
    <>
      <Cart />
      <MainHome />
      <ListProducts />
    </>
  );
};
