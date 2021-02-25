import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const GetProductsDocument = gql`
  query GetProducts {
    products(order_by: { createdAt: desc }) {
      id
      name
      pricing
      saleOff
      URLImage
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetProductsQuery,
    Types.GetProductsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetProductsQuery,
    Types.GetProductsQueryVariables
  >(GetProductsDocument, baseOptions);
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetProductsQuery,
    Types.GetProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetProductsQuery,
    Types.GetProductsQueryVariables
  >(GetProductsDocument, baseOptions);
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  Types.GetProductsQuery,
  Types.GetProductsQueryVariables
>;
export const ProductsByCategoryDocument = gql`
  query ProductsByCategory($category: String!) {
    products(
      where: { categories_products: { category: { name: { _eq: $category } } } }
    ) {
      id
      name
      URLImage
      pricing
      saleOff
    }
  }
`;

/**
 * __useProductsByCategoryQuery__
 *
 * To run a query within a React component, call `useProductsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useProductsByCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ProductsByCategoryQuery,
    Types.ProductsByCategoryQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.ProductsByCategoryQuery,
    Types.ProductsByCategoryQueryVariables
  >(ProductsByCategoryDocument, baseOptions);
}
export function useProductsByCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ProductsByCategoryQuery,
    Types.ProductsByCategoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.ProductsByCategoryQuery,
    Types.ProductsByCategoryQueryVariables
  >(ProductsByCategoryDocument, baseOptions);
}
export type ProductsByCategoryQueryHookResult = ReturnType<
  typeof useProductsByCategoryQuery
>;
export type ProductsByCategoryLazyQueryHookResult = ReturnType<
  typeof useProductsByCategoryLazyQuery
>;
export type ProductsByCategoryQueryResult = Apollo.QueryResult<
  Types.ProductsByCategoryQuery,
  Types.ProductsByCategoryQueryVariables
>;
export const InsertProductDocument = gql`
  mutation InsertProduct(
    $categories_name: String!
    $url: String!
    $name: String!
    $pricing: Int!
    $saleOff: Int!
  ) {
    insert_products(
      objects: {
        categories_products: {
          data: { category: { data: { name: $categories_name } } }
        }
        URLImage: $url
        name: $name
        pricing: $pricing
        saleOff: $saleOff
      }
    ) {
      affected_rows
    }
  }
`;
export type InsertProductMutationFn = Apollo.MutationFunction<
  Types.InsertProductMutation,
  Types.InsertProductMutationVariables
>;

/**
 * __useInsertProductMutation__
 *
 * To run a mutation, you first call `useInsertProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductMutation, { data, loading, error }] = useInsertProductMutation({
 *   variables: {
 *      categories_name: // value for 'categories_name'
 *      url: // value for 'url'
 *      name: // value for 'name'
 *      pricing: // value for 'pricing'
 *      saleOff: // value for 'saleOff'
 *   },
 * });
 */
export function useInsertProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.InsertProductMutation,
    Types.InsertProductMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.InsertProductMutation,
    Types.InsertProductMutationVariables
  >(InsertProductDocument, baseOptions);
}
export type InsertProductMutationHookResult = ReturnType<
  typeof useInsertProductMutation
>;
export type InsertProductMutationResult = Apollo.MutationResult<Types.InsertProductMutation>;
export type InsertProductMutationOptions = Apollo.BaseMutationOptions<
  Types.InsertProductMutation,
  Types.InsertProductMutationVariables
>;
