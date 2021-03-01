import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import useMedia from "../../hooks/use-media";
import { debounce } from "../../utilities/helpers";

export const Header = (props: any) => {
  const isWide = useMedia("(min-width: 480px)");
  const auth = useAuth();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    if (!isWide) {
      return;
    }
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 9998,
          transition: "top 0.3s",
          top: visible ? "0" : "-120px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "5px",
            backgroundColor: "rgb(73, 173, 255)",
          }}
        >
          <p>Freeship cho đơn hàng từ 400,000đ.</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgb(247, 247, 247)",
            padding: "0 5px",
            borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
            zIndex: 9998,
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
                style={{ width: "36px" }}
                src="https://firebasestorage.googleapis.com/v0/b/store-of-king.appspot.com/o/asset%2Flogo64.png?alt=media&token=6e9b629e-1300-414e-9a1c-7e3fbe60019b"
                alt="Logo"
              />
            </Link>
            <span>IRONMAN</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 12px",
            }}
          >
            {!isWide ? (
              <span
                onClick={() => {
                  props.setIsOpenCategories(true);
                }}
              >
                Categories
              </span>
            ) : (
              <></>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {auth.state.user ? (
                <Link
                  onClick={auth.signout}
                  style={{
                    padding: "0 12px",
                    color: "#03713d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
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
              ) : (
                <Link
                  style={{
                    padding: "0 12px",
                    color: "#03713d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
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
      </div>
    </div>
  );
};
