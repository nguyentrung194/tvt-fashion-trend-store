import * as Types from "./schemas";

export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProductsQuery = { __typename?: "query_root" } & {
  products: Array<
    { __typename?: "products" } & Pick<
      Types.Products,
      "id" | "name" | "pricing" | "saleOff" | "URLImage"
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
