import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import logo64 from "./logo64.png";
import cart24 from "./cart-24.png";
import logout24 from "./logout-24.png";
import login24 from "./login-24.png";
import { MainHome } from "./main-home";
import useMedia from "../../hooks/use-media";

export const Header = () => {
  const isWide = useMedia("(min-width: 480px)");
  const auth = useAuth();
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgb(247, 247, 247)",
            padding: "0 5px",
            borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
          }}
        >
          <div
            style={{
              padding: "6px 6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                style={{ width: "40px", paddingRight: "16px" }}
                src={logo64}
                alt="Logo"
              />
            </Link>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "20px",
              }}
            >
              Freeship cho đơn hàng từ 400,000đ.
            </p>
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
                    padding: "0 12px",
                    color: "#03713d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  to="/"
                >
                  {isWide ? "Logout" : ""}
                  <img src={logout24} alt="Logout" />
                </Link>
                <Link
                  to=""
                  style={{
                    padding: "0 12px",
                    color: "#03713d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isWide ? "Cart" : ""}
                  <img src={cart24} alt="Cart" />
                </Link>
              </>
            ) : (
              <Link
                style={{
                  padding: "0 12px",
                  color: "#03713d",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                to="/auth/sign-in"
              >
                {isWide ? "Login" : ""}
                <img src={login24} alt="Login" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <MainHome />
    </div>
  );
};
