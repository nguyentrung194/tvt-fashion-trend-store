import React, { useState } from "react";
import useMedia from "../../../hooks/use-media";

export const InforAddress = ({ props }: any) => {
  const isWide = useMedia("(min-width: 480px)");

  const [opt, setOpt] = useState(localStorage.getItem(props.name) || "");
  return (
    <div>
      <div
        style={{
          padding: "30px",
          boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.16)",
          backgroundColor: "rgb(255, 255, 255)",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            paddingBottom: "26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>
            <span
              style={{
                background: "rgb(5, 148, 79)",
                borderRadius: "30px",
                fontSize: "18px",
                color: "rgb(255, 255, 255)",
                padding: "6px 12px",
              }}
            >
              {props.stepId}
            </span>
            <strong style={{ paddingLeft: "18px", fontSize: "18px" }}>
              {props.name}
            </strong>
          </h1>
          {props.button ? (
            <button
              style={{
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontWeight: 700,
                color: "rgb(0, 158, 127)",
                lineHeight: "24px",
                cursor: "pointer",
              }}
              onClick={() => {}}
            >
              {props.button}
            </button>
          ) : null}
        </div>
        <div
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(164px, 1fr))",
            gridGap: isWide ? "6px" : "3px",
            maxHeight: "260px",
          }}
        >
          {props.infor.map((el: any) => {
            return (
              <div
                onClick={() => {
                  localStorage.setItem(props.name, el.id);
                  setOpt(el.id);
                }}
                style={{
                  height: "64px",
                  maxWidth: "200px",
                  padding: "20px",
                  backgroundColor:
                    opt == el.id ? "rgb(255, 255, 255)" : "rgb(246, 246, 246)",
                  marginRight: "15px",
                  marginBottom: "15px",
                  border: `1px solid ${
                    opt == el.id ? "rgb(5, 148, 79)" : "transparent"
                  }`,
                  borderRadius: "5px",
                  transition: "all 0.25s ease 0s",
                  cursor: "pointer",
                }}
              >
                <h1
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  {el.name}
                </h1>
                <p>{el.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
