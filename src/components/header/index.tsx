import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { MainHome } from "./main-home";
import useMedia from "../../hooks/use-media";
import { Navbar } from "./navbar";

export const Header = (props: any) => {
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
            zIndex: 9999,
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
                src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Flogo64.png?alt=media&token=6e9b629e-1300-414e-9a1c-7e3fbe60019b"
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
            <Navbar setByCategory={props.setByCategory} />
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
                  <div style={{ paddingRight: "6px" }}>
                    {isWide ? "Logout" : ""}
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Flogout-24.png?alt=media&token=95aa0afe-73f9-41df-b6f8-9384cac6f467"
                    alt="Logout"
                  />
                </Link>
                <Link
                  to="/"
                  style={{
                    padding: "0 12px",
                    color: "#03713d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ paddingRight: "6px" }}>
                    {isWide ? "Cart" : ""}
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Fcart-24.png?alt=media&token=1dbe43f1-b34b-4884-9420-b137f6808ea2"
                    alt="Cart"
                  />
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
                <div style={{ paddingRight: "6px" }}>
                  {isWide ? "Login" : ""}
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Flogin-24.png?alt=media&token=9ef01eab-9547-4317-8217-61e56e380fdb"
                  alt="Login"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <MainHome />
    </div>
  );
};
