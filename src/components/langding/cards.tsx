import React from "react";
import { Card } from "./card";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/schema";

export const Cards = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (error && !data) {
    console.log(error);
    return <div>Error...</div>;
  }
  if (loading && !data) {
    return <div>Loading...</div>;
  }
  const { products } = data;
  console.log(products);
  return (
    <>
      {products.map((el: any) => {
        return <Card key={el.id} props={el} />;
      })}
      {products.map((el: any) => {
        return <Card key={el.id} props={el} />;
      })}
      {products.map((el: any) => {
        return <Card key={el.id} props={el} />;
      })}
    </>
  );
};
