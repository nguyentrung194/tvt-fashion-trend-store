import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import logo64 from "./logo64.png";

export const Header = () => {
  const auth = useAuth();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FFE3AC",
          padding: "0 34px",
          paddingLeft: "12%",
          borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "14px 4px",
          }}
        >
          Freeship cho đơn hàng từ 400,000đ.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "hsla(0, 0%, 0%, 0.01)",
          padding: "0 34px",
          borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
        }}
      >
        <div style={{ padding: "16px 12px" }}>
          <img style={{}} src={logo64} alt="Lgo" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 12px",
          }}
        >
          {auth.state.user ? (
            <>
              <Link
                onClick={auth.signout}
                style={{
                  padding: "0 6px",
                  color: "#03713d",
                  textDecoration: "none",
                }}
                to="/"
              >
                Đăng xuất
              </Link>
              <span style={{ padding: "0 6px" }}>Giỏ hàng</span>
            </>
          ) : (
            <Link
              style={{ color: "#03713d", textDecoration: "none" }}
              to="/auth/sign-in"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
