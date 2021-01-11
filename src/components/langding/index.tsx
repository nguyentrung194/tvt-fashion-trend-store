import React from "react";
import { Header } from "../../app/layouts/header";
import { MainHome } from "../../app/layouts/header/main-home";
import { useAuth } from "../../hooks/use-auth";

export const Home = () => {
  const auth = useAuth();
  return (
    <>
      <Header />
      <MainHome />
      <div></div>
    </>
  );
};
