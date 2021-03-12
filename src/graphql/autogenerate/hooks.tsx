import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const ProductsDocument = gql`
  query Products(
    $where: products_bool_exp!
    $order_by: products_order_by!
    $limit: Int! = 10
    $offset: Int! = 0
  ) {
    products_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    products(
      order_by: [$order_by]
      where: $where
      limit: $limit
      offset: $offset
    ) {
      id
      name
      pricing
      saleOff
      URLImage
    }
  }
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order_by: // value for 'order_by'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ProductsQuery,
    Types.ProductsQueryVariables
  >
) {
  return Apollo.useQuery<Types.ProductsQuery, Types.ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ProductsQuery,
    Types.ProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.ProductsQuery, Types.ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  Types.ProductsQuery,
  Types.ProductsQueryVariables
>;
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
export const GetAddressDocument = gql`
  query GetAddress($email: String!) {
    users(where: { email: { _eq: $email } }) {
      address
    }
  }
`;

/**
 * __useGetAddressQuery__
 *
 * To run a query within a React component, call `useGetAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAddressQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetAddressQuery,
    Types.GetAddressQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetAddressQuery, Types.GetAddressQueryVariables>(
    GetAddressDocument,
    baseOptions
  );
}
export function useGetAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetAddressQuery,
    Types.GetAddressQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetAddressQuery,
    Types.GetAddressQueryVariables
  >(GetAddressDocument, baseOptions);
}
export type GetAddressQueryHookResult = ReturnType<typeof useGetAddressQuery>;
export type GetAddressLazyQueryHookResult = ReturnType<
  typeof useGetAddressLazyQuery
>;
export type GetAddressQueryResult = Apollo.QueryResult<
  Types.GetAddressQuery,
  Types.GetAddressQueryVariables
>;
export const AddAddressDocument = gql`
  mutation AddAddress($address: jsonb!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _append: { address: $address }
    ) {
      affected_rows
    }
  }
`;
export type AddAddressMutationFn = Apollo.MutationFunction<
  Types.AddAddressMutation,
  Types.AddAddressMutationVariables
>;

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddAddressMutation,
    Types.AddAddressMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddAddressMutation,
    Types.AddAddressMutationVariables
  >(AddAddressDocument, baseOptions);
}
export type AddAddressMutationHookResult = ReturnType<
  typeof useAddAddressMutation
>;
export type AddAddressMutationResult = Apollo.MutationResult<Types.AddAddressMutation>;
export type AddAddressMutationOptions = Apollo.BaseMutationOptions<
  Types.AddAddressMutation,
  Types.AddAddressMutationVariables
>;
export const DeleteAddressDocument = gql`
  mutation DeleteAddress($index: Int!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _delete_elem: { address: $index }
    ) {
      affected_rows
    }
  }
`;
export type DeleteAddressMutationFn = Apollo.MutationFunction<
  Types.DeleteAddressMutation,
  Types.DeleteAddressMutationVariables
>;

/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      index: // value for 'index'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeleteAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteAddressMutation,
    Types.DeleteAddressMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.DeleteAddressMutation,
    Types.DeleteAddressMutationVariables
  >(DeleteAddressDocument, baseOptions);
}
export type DeleteAddressMutationHookResult = ReturnType<
  typeof useDeleteAddressMutation
>;
export type DeleteAddressMutationResult = Apollo.MutationResult<Types.DeleteAddressMutation>;
export type DeleteAddressMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteAddressMutation,
  Types.DeleteAddressMutationVariables
>;
export const GetContactDocument = gql`
  query GetContact($email: String!) {
    users(where: { email: { _eq: $email } }) {
      phones
    }
  }
`;

/**
 * __useGetContactQuery__
 *
 * To run a query within a React component, call `useGetContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetContactQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetContactQuery,
    Types.GetContactQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetContactQuery, Types.GetContactQueryVariables>(
    GetContactDocument,
    baseOptions
  );
}
export function useGetContactLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetContactQuery,
    Types.GetContactQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetContactQuery,
    Types.GetContactQueryVariables
  >(GetContactDocument, baseOptions);
}
export type GetContactQueryHookResult = ReturnType<typeof useGetContactQuery>;
export type GetContactLazyQueryHookResult = ReturnType<
  typeof useGetContactLazyQuery
>;
export type GetContactQueryResult = Apollo.QueryResult<
  Types.GetContactQuery,
  Types.GetContactQueryVariables
>;
export const AddContactDocument = gql`
  mutation AddContact($phones: jsonb!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _append: { phones: $phones }
    ) {
      affected_rows
    }
  }
`;
export type AddContactMutationFn = Apollo.MutationFunction<
  Types.AddContactMutation,
  Types.AddContactMutationVariables
>;

/**
 * __useAddContactMutation__
 *
 * To run a mutation, you first call `useAddContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactMutation, { data, loading, error }] = useAddContactMutation({
 *   variables: {
 *      phones: // value for 'phones'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddContactMutation,
    Types.AddContactMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddContactMutation,
    Types.AddContactMutationVariables
  >(AddContactDocument, baseOptions);
}
export type AddContactMutationHookResult = ReturnType<
  typeof useAddContactMutation
>;
export type AddContactMutationResult = Apollo.MutationResult<Types.AddContactMutation>;
export type AddContactMutationOptions = Apollo.BaseMutationOptions<
  Types.AddContactMutation,
  Types.AddContactMutationVariables
>;
export const DeleteContactDocument = gql`
  mutation DeleteContact($index: Int!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _delete_elem: { phones: $index }
    ) {
      affected_rows
    }
  }
`;
export type DeleteContactMutationFn = Apollo.MutationFunction<
  Types.DeleteContactMutation,
  Types.DeleteContactMutationVariables
>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      index: // value for 'index'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeleteContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteContactMutation,
    Types.DeleteContactMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.DeleteContactMutation,
    Types.DeleteContactMutationVariables
  >(DeleteContactDocument, baseOptions);
}
export type DeleteContactMutationHookResult = ReturnType<
  typeof useDeleteContactMutation
>;
export type DeleteContactMutationResult = Apollo.MutationResult<Types.DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteContactMutation,
  Types.DeleteContactMutationVariables
>;
export const GetPaymentDocument = gql`
  query GetPayment($email: String!) {
    users(where: { email: { _eq: $email } }) {
      payment
    }
  }
`;

/**
 * __useGetPaymentQuery__
 *
 * To run a query within a React component, call `useGetPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetPaymentQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetPaymentQuery,
    Types.GetPaymentQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetPaymentQuery, Types.GetPaymentQueryVariables>(
    GetPaymentDocument,
    baseOptions
  );
}
export function useGetPaymentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetPaymentQuery,
    Types.GetPaymentQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetPaymentQuery,
    Types.GetPaymentQueryVariables
  >(GetPaymentDocument, baseOptions);
}
export type GetPaymentQueryHookResult = ReturnType<typeof useGetPaymentQuery>;
export type GetPaymentLazyQueryHookResult = ReturnType<
  typeof useGetPaymentLazyQuery
>;
export type GetPaymentQueryResult = Apollo.QueryResult<
  Types.GetPaymentQuery,
  Types.GetPaymentQueryVariables
>;
export const AddPaymentDocument = gql`
  mutation AddPayment($payment: jsonb!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _append: { payment: $payment }
    ) {
      affected_rows
    }
  }
`;
export type AddPaymentMutationFn = Apollo.MutationFunction<
  Types.AddPaymentMutation,
  Types.AddPaymentMutationVariables
>;

/**
 * __useAddPaymentMutation__
 *
 * To run a mutation, you first call `useAddPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPaymentMutation, { data, loading, error }] = useAddPaymentMutation({
 *   variables: {
 *      payment: // value for 'payment'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddPaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddPaymentMutation,
    Types.AddPaymentMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddPaymentMutation,
    Types.AddPaymentMutationVariables
  >(AddPaymentDocument, baseOptions);
}
export type AddPaymentMutationHookResult = ReturnType<
  typeof useAddPaymentMutation
>;
export type AddPaymentMutationResult = Apollo.MutationResult<Types.AddPaymentMutation>;
export type AddPaymentMutationOptions = Apollo.BaseMutationOptions<
  Types.AddPaymentMutation,
  Types.AddPaymentMutationVariables
>;
export const DeletePaymentDocument = gql`
  mutation DeletePayment($index: Int!, $email: String!) {
    update_users(
      where: { email: { _eq: $email } }
      _delete_elem: { payment: $index }
    ) {
      affected_rows
    }
  }
`;
export type DeletePaymentMutationFn = Apollo.MutationFunction<
  Types.DeletePaymentMutation,
  Types.DeletePaymentMutationVariables
>;

/**
 * __useDeletePaymentMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMutation, { data, loading, error }] = useDeletePaymentMutation({
 *   variables: {
 *      index: // value for 'index'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeletePaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeletePaymentMutation,
    Types.DeletePaymentMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.DeletePaymentMutation,
    Types.DeletePaymentMutationVariables
  >(DeletePaymentDocument, baseOptions);
}
export type DeletePaymentMutationHookResult = ReturnType<
  typeof useDeletePaymentMutation
>;
export type DeletePaymentMutationResult = Apollo.MutationResult<Types.DeletePaymentMutation>;
export type DeletePaymentMutationOptions = Apollo.BaseMutationOptions<
  Types.DeletePaymentMutation,
  Types.DeletePaymentMutationVariables
>;
