import React from "react";
import { Header } from "../../app/layouts/header";
import { useAuth } from "../../hooks/use-auth";

export const Home = () => {
  const auth = useAuth();
  return (
    <>
      <Header />
      <div></div>
    </>
  );
};
