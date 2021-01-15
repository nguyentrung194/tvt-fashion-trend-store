import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { fbase } from "../../hooks/use-auth";
import useMedia from "../../hooks/use-media";

export const SignIn = () => {
  const isWide = useMedia("(min-width: 480px)");
  const handelSignInWithGoogle = async () => {
    const provider = new fbase.auth.GoogleAuthProvider();
    return await fbase
      .auth()
      .signInWithPopup(provider)
      .then((data) => {
        if (data) {
          console.log("Login successful!");
        }
      })
      .catch((error) => {
        if (error.code !== "auth/popup-closed-by-user")
          console.log(error.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await fbase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          height: "80%",
          width: isWide ? "450px" : "100%",
          margin: "auto",
          borderRadius: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "hsla(0, 0%, 0%, 0.24)",
          boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.16)",
        }}
      >
        <div style={{ width: "90%" }}>
          <div
            style={{
              width: "100%",
              fontSize: "26px",
            }}
          >
            Welcome back
          </div>
          <p
            style={{
              width: "100%",
              fontSize: "16px",
              lineHeight: "24px",
              paddingBottom: "14px",
              color: "gray",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/auth/sign-up"
              style={{
                fontWeight: 500,
                color: "#03713d",
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </p>

          <div style={{ width: "100%" }}>
            <button
              onClick={handelSignInWithGoogle}
              type="button"
              style={{
                textAlign: "center",
                cursor: "pointer",
                outline: "none",
                backgroundColor: "white",
                height: "auto",
                lineHeight: "normal",
                minHeight: "40px",
                padding: "8px 16px",
                width: "100%",
                boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
                borderRadius: "6px",
                border: "none",
              }}
            >
              <span
                style={{
                  color: `#151515`,
                  fontSize: "14px",
                  lineHeight: "16px",
                  paddingLeft: "16px",
                  textTransform: "none",
                  verticalAlign: "middle",
                }}
              >
                Sign in with Google
              </span>
            </button>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
          >
            <hr
              style={{
                margin: 0,
                border: "none",
                flex: "1 1 0%",
                borderTop: `1px solid #E2E2E2`,
              }}
            />
            <span
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "24px",
                color: "#757575",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              or
            </span>
            <hr
              style={{
                margin: 0,
                border: "none",
                flex: "1 1 0%",
                borderTop: `1px solid #E2E2E2`,
              }}
            />
          </div>
          <form
            style={{ width: "100%", textAlign: "left" }}
            onSubmit={formik.handleSubmit}
          >
            <input
              name="email"
              type="email"
              style={{ width: "90%", padding: "8px 16px", margin: "6px 0" }}
              placeholder="Email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <input
              name="password"
              type="password"
              style={{ width: "90%", padding: "8px 16px", margin: "6px 0" }}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div
              style={{
                textAlign: "right",
                fontSize: "14px",
                lineHeight: "16px",
                color: "#757575",
                paddingTop: "6px",
              }}
            >
              <Link
                style={{ color: "#03713d", textDecoration: "none" }}
                to="/auth/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              style={{
                width: "100%",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                borderBottomLeftRadius: "6px",
                marginTop: "12px",
                backgroundColor: "#05944F",
                boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
                padding: "8px 16px",
                margin: "6px 0",
              }}
              disabled={formik.isSubmitting}
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
