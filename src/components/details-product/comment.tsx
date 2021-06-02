import React from "react";
import { useGetAvatarByPkQuery } from "../../graphql/autogenerate/hooks";

export const Comment = ({ el }: any) => {
  const { data, loading, error } = useGetAvatarByPkQuery({
    variables: {
      userId: el.userId,
    },
  });
  if (loading) return <div key={el.index}>Loading...</div>;
  if (error) {
    console.log(error);
    return <div key={el.index}>Error!</div>;
  }
  return (
    <div
      key={el.index}
      style={{
        padding: "6px",
        background: "white",
        borderRadius: "4px",
        margin: "6px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img width="80px" src={data?.users_by_pk?.avatarUrl || ""} alt="avatar" />
      <p style={{ paddingLeft: "6px" }}>{el.comment}</p>
    </div>
  );
};
