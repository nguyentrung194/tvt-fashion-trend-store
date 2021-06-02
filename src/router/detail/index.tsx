import React from "react";
import { useParams } from "react-router-dom";
import { DetailProduct } from "../../components/details-product";

export const DetailProductPage: React.FC<{}> = () => {
  const { id } = useParams();

  return (
    <div>
      <DetailProduct id={id} />
    </div>
  );
};
