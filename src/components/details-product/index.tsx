import { useFormik } from "formik";
import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";
import { CartContext } from "../../contexts/cart-context";
import {
  CommentOfProductDocument,
  useCommentOfProductQuery,
  useInsertCommentMutation,
} from "../../graphql/autogenerate/hooks";
import { useAuth } from "../../hooks/use-auth";
import useMedia from "../../hooks/use-media";
import { Comment } from "./comment";

export const DetailProduct = ({ id }: any) => {
  const { addToast } = useToasts();
  const isWide = useMedia("(min-width: 480px)");
  const { data, loading, error } = useCommentOfProductQuery({
    variables: {
      id: id,
    },
  });
  console.log(data);
  const { increase, decrease, addProduct, cartItems } = useContext(CartContext);
  const isInCart = (product: any) => {
    return !!cartItems?.find((item: any) => item.id === product.id);
  };
  const {
    state: { customClaims },
  }: any = useAuth();

  const [addComment] = useInsertCommentMutation();

  const formik: any = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        formik.setSubmitting(true);
        addToast("This can take a few seconds", {
          appearance: "info",
          autoDismiss: true,
        });
        await addComment({
          variables: {
            comment: values.comment,
            userId:
              customClaims?.claims["https://hasura.io/jwt/claims"][
                "x-hasura-user-id-on-db"
              ],
            productId: id,
          },
          refetchQueries: [
            {
              query: CommentOfProductDocument,
              variables: { id: id },
            },
          ],
        });
        addToast("Comment successfull!", {
          appearance: "success",
          autoDismiss: true,
        });
        formik.setSubmitting(false);
      } catch (error) {
        console.log(error);
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        formik.setSubmitting(false);
      }
    },
  });

  if (loading)
    return (
      <div
        style={{
          padding: "200px 14px 200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  if (error) {
    console.log(error);
    return (
      <div
        style={{
          padding: "200px 14px 200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Error!
      </div>
    );
  }
  const product = data?.products_by_pk;
  return (
    <div
      style={{
        padding: "200px 28px 200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(246, 246, 246)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isWide ? "5fr 7fr" : "1fr",
            gridGap: isWide ? "12px" : "6px",
            padding: "110px 14px 0",
            minHeight: "100vh",
            maxWidth: "1244px",
            margin: "auto",
          }}
        >
          <div>
            <img
              style={{
                width: "100%",
                padding: "3px",
              }}
              src={product?.URLImage || ""}
              alt={product?.name}
            />
          </div>
          <div
            style={{
              padding: "50px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "26px",
                textAlign: "start",
              }}
            >
              {product?.name}
            </div>
            <div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  textAlign: "start",
                }}
              >
                Mô tả
              </span>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  textAlign: "start",
                  margin: "24px 0",
                }}
              >
                Lorem isopop Lorem isopopLorem isopopLorem isopop Lorem isopop
                Lorem isopopLorem isopopLorem isopop Lorem isopop Lorem
                isopopLorem isopopLorem isopop Lorem isopop Lorem isopopLorem
                isopopLorem isopop
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  textAlign: "start",
                  margin: "24px 0",
                }}
              >
                {product?.saleOff ? `Giảm giá ${product.saleOff}%` : ""}
              </p>
            </div>
            {product?.saleOff ? (
              <div>
                <p
                  style={{
                    height: "24px",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textAlign: "start",
                    margin: "24px 0",
                  }}
                >
                  Giá gốc: {` `}
                  <span style={{ textDecoration: "line-through" }}>
                    {product?.saleOff
                      ? `${product.pricing.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}`
                      : ``}
                  </span>
                </p>
              </div>
            ) : null}
            <div
              style={{
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "24px",
                textAlign: "start",
                margin: "24px 0",
              }}
            >
              Giá bán ra: {` `}
              <span>
                {(product?.saleOff
                  ? (product.pricing * (100 - product.saleOff)) / 100
                  : product?.pricing || 0
                ).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              {!isInCart(product) && (
                <button
                  className="button-summit"
                  style={{
                    background: "rgb(73, 173, 255)",
                  }}
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  <span style={{ paddingRight: "2px" }}>Add to cart</span>
                </button>
              )}
              {isInCart(product) && (
                <div
                  className="button-submit"
                  style={{
                    background: "rgb(73, 173, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "14px",
                        cursor: "pointer",
                        outline: "none",
                        padding: "5px 10px",
                      }}
                      onClick={() => {
                        increase(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div style={{ fontSize: "14px", padding: "5px 0px" }}>
                    {
                      cartItems[
                        cartItems.findIndex(
                          (item: any) => item.id === product?.id
                        )
                      ].soluong
                    }
                  </div>
                  <div>
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "14px",
                        cursor: "pointer",
                        outline: "none",
                        padding: "5px 10px",
                      }}
                      onClick={() => {
                        decrease(product);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                textAlign: "start",
              }}
            >
              {data?.comment.length ? (
                data?.comment.map((el, index) => (
                  <Comment el={{ ...el, index }} />
                ))
              ) : (
                <p>Không có bình luận cho sản phẩm này</p>
              )}
            </div>
            {customClaims?.claims["https://hasura.io/jwt/claims"][
              "x-hasura-user-id-on-db"
            ] ? (
              <div>
                <form
                  style={{ width: "100%", textAlign: "left", display: "flex" }}
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    style={{
                      width: "91%",
                      padding: "8px 16px",
                      margin: "6px 0",
                    }}
                    required
                    name="comment"
                    placeholder="Comment your feeling..."
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                  />
                  <button
                    style={{
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
                    Comment
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
