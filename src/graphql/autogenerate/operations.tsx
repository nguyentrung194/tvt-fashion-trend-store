import * as Types from "./schemas";

export type InsertCommentMutationVariables = Types.Exact<{
  comment: Types.Scalars["String"];
  userId: Types.Scalars["uuid"];
  productId: Types.Scalars["uuid"];
}>;

export type InsertCommentMutation = { __typename?: "mutation_root" } & {
  insert_comment_one?: Types.Maybe<
    { __typename?: "comment" } & Pick<Types.Comment, "id">
  >;
};

export type CommentOfProductQueryVariables = Types.Exact<{
  id: Types.Scalars["uuid"];
}>;

export type CommentOfProductQuery = { __typename?: "query_root" } & {
  comment: Array<
    { __typename?: "comment" } & Pick<Types.Comment, "comment" | "userId">
  >;
  products_by_pk?: Types.Maybe<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "URLImage" | "name" | "pricing" | "saleOff"
    >
  >;
};

export type GetAvatarByPkQueryVariables = Types.Exact<{
  userId: Types.Scalars["uuid"];
}>;

export type GetAvatarByPkQuery = { __typename?: "query_root" } & {
  users_by_pk?: Types.Maybe<
    { __typename?: "users" } & Pick<Types.Users, "avatarUrl">
  >;
};

export type InsertOrderMutationVariables = Types.Exact<{
  deliveryAddress: Types.Scalars["jsonb"];
  contactNumber: Types.Scalars["jsonb"];
  deliveryMethod: Types.Scalars["jsonb"];
  paymentOption?: Types.Maybe<Types.Scalars["jsonb"]>;
  products: Types.Scalars["jsonb"];
  userId: Types.Scalars["String"];
}>;

export type InsertOrderMutation = { __typename?: "mutation_root" } & {
  insert_orders_one?: Types.Maybe<
    { __typename?: "orders" } & Pick<Types.Orders, "id">
  >;
};

export type ProductsQueryVariables = Types.Exact<{
  where: Types.Products_Bool_Exp;
  order_by: Types.Products_Order_By;
  limit?: Types.Scalars["Int"];
  offset?: Types.Scalars["Int"];
}>;

export type ProductsQuery = { __typename?: "query_root" } & {
  products_aggregate: { __typename?: "products_aggregate" } & {
    aggregate?: Types.Maybe<
      { __typename?: "products_aggregate_fields" } & Pick<
        Types.Products_Aggregate_Fields,
        "count"
      >
    >;
  };
  products: Array<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "name" | "pricing" | "saleOff" | "URLImage"
    >
  >;
};

export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProductsQuery = { __typename?: "query_root" } & {
  products: Array<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "name" | "pricing" | "saleOff" | "URLImage"
    >
  >;
};

export type ProductByPkQueryVariables = Types.Exact<{
  id: Types.Scalars["uuid"];
}>;

export type ProductByPkQuery = { __typename?: "query_root" } & {
  products_by_pk?: Types.Maybe<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "URLImage" | "name" | "pricing" | "saleOff"
    >
  >;
};

export type ProductsByCategoryQueryVariables = Types.Exact<{
  category: Types.Scalars["String"];
}>;

export type ProductsByCategoryQuery = { __typename?: "query_root" } & {
  products: Array<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "name" | "URLImage" | "pricing" | "saleOff"
    >
  >;
};

export type InsertProductMutationVariables = Types.Exact<{
  categories_name: Types.Scalars["String"];
  url: Types.Scalars["String"];
  name: Types.Scalars["String"];
  pricing: Types.Scalars["Int"];
  saleOff: Types.Scalars["Int"];
}>;

export type InsertProductMutation = { __typename?: "mutation_root" } & {
  insert_products?: Types.Maybe<
    { __typename?: "products_mutation_response" } & Pick<
      Types.Products_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type GetAddressQueryVariables = Types.Exact<{
  email: Types.Scalars["String"];
}>;

export type GetAddressQuery = { __typename?: "query_root" } & {
  users: Array<{ __typename?: "users" } & Pick<Types.Users, "address">>;
};

export type AddAddressMutationVariables = Types.Exact<{
  address: Types.Scalars["jsonb"];
  email: Types.Scalars["String"];
}>;

export type AddAddressMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type DeleteAddressMutationVariables = Types.Exact<{
  index: Types.Scalars["Int"];
  email: Types.Scalars["String"];
}>;

export type DeleteAddressMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type GetContactQueryVariables = Types.Exact<{
  email: Types.Scalars["String"];
}>;

export type GetContactQuery = { __typename?: "query_root" } & {
  users: Array<{ __typename?: "users" } & Pick<Types.Users, "phones">>;
};

export type AddContactMutationVariables = Types.Exact<{
  phones: Types.Scalars["jsonb"];
  email: Types.Scalars["String"];
}>;

export type AddContactMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type DeleteContactMutationVariables = Types.Exact<{
  index: Types.Scalars["Int"];
  email: Types.Scalars["String"];
}>;

export type DeleteContactMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type GetPaymentQueryVariables = Types.Exact<{
  email: Types.Scalars["String"];
}>;

export type GetPaymentQuery = { __typename?: "query_root" } & {
  users: Array<{ __typename?: "users" } & Pick<Types.Users, "payment">>;
};

export type AddPaymentMutationVariables = Types.Exact<{
  payment: Types.Scalars["jsonb"];
  email: Types.Scalars["String"];
}>;

export type AddPaymentMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type DeletePaymentMutationVariables = Types.Exact<{
  index: Types.Scalars["Int"];
  email: Types.Scalars["String"];
}>;

export type DeletePaymentMutation = { __typename?: "mutation_root" } & {
  update_users?: Types.Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Types.Users_Mutation_Response,
      "affected_rows"
    >
  >;
};
