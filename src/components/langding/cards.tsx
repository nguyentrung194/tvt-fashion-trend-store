import React, { useEffect } from "react";
import { Card } from "./card";
import { useProductsByCategoryQuery } from "../../graphql/autogenerate/hooks";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/schema";

export const Cards = (props: any) => {
  const { data, error, loading } = useProductsByCategoryQuery({
    variables: {
      category: props.byCategory,
    },
  });

  const { loading: loading1, error: error1, data: data1 } = useQuery(
    GET_PRODUCTS
  );

  // The later get inf
  if (error && !data) {
    console.log(error);
    return <div>Error...</div>;
  }
  if (loading && !data) {
    return <div>Loading...</div>;
  }

  // The first get inf
  if (error1 && !data1) {
    console.log(error1);
    return <div>Error...</div>;
  }
  if (loading1 && !data1) {
    return <div>Loading...</div>;
  }

  const products = data?.products.length ? data.products : data1.products;
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
