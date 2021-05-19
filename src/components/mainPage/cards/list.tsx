import React from "react";
import qs from "qs";
import { get } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

import { useQueryURL } from "../../../hooks/use-query-url";
import { useProductsQuery } from "../../../graphql/autogenerate/hooks";
import { Product } from "./product";
import useMedia from "../../../hooks/use-media";
import { ProductLoading } from "./productLoading";

const LIMIT = 3;

export const List = (props: any) => {
  const isWide = useMedia("(min-width: 480px)");

  const query = useQueryURL();
  const location = useLocation();
  const history = useNavigate();

  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const page = parseInt(queryParams.page) || 1;
  const productsTemplate: any = [{
    id: 1,
  }, {
    id: 2,
  }, {
    id: 3,
  }]

  const { data, loading, error } = useProductsQuery({
    variables: {
      limit: LIMIT,
      offset: LIMIT * page - LIMIT,
      order_by: {
        createdAt: query.get("sortbydate") || ("desc" as any),
      },
      where: {
        _and: [
          {
            _or: queryParams.categories
              ? queryParams.categories.split(",").map((item: any) => ({
                categories_products: { category: { name: { _eq: item } } },
              }))
              : {},
          },
          {
            _or: [
              {
                name: {
                  _ilike: `%${query.get("search") || ""}%`,
                },
              },
              {
                name: {
                  _iregex: `^${(query.get("search") || "")
                    ?.split("")
                    .filter((el) => el !== " ")
                    .map((el) => `(${el}){1}.*`)
                    .join(`\\s`)}$`,
                },
              },
            ],
          },
        ],
      },
    },
  });
  if (loading) return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${isWide ? "164px" : "135px"
            }, 1fr))`,
          gridAutoRows: "minmax(270px, 300px)",
          gridGap: isWide ? "6px" : "3px",
        }}
      >
        {(productsTemplate as any).map((product: any) => (
          <ProductLoading key={product.id} product={product} />
        ))}
      </div>
      <div style={{ margin: "3px 0 0 6px" }}>
        <span>
          {page >= 1 && (
            <button
              onClick={() => {
                query.set("page", String(page - 1));
                history(`${location.pathname}?${query}`);
              }}
              disabled={page === 1 ? true : false}
            >
              Previous
            </button>
          )}
        </span>
        <span>{` | Page ${page} | `}</span>
        <span>
          {page <= 1 && (
            <button
              onClick={() => {
                query.set("page", String(page + 1));
                history(`${location.pathname}?${query}`);
              }}
              disabled={page === 1 ? true : false}
            >
              Next
            </button>
          )}
        </span>
      </div>
    </div>
  );
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }

  const productCount = data && data.products_aggregate.aggregate!.count;
  const products = data && get(data, "products", []);
  const numPages = Math.ceil((productCount as number) / LIMIT);

  if (products!.length === 0)
    return (
      <div>
        <div>No results.</div>
        <p>Search again or try removing filters.</p>
      </div>
    );

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${isWide ? "164px" : "135px"
            }, 1fr))`,
          gridAutoRows: "minmax(270px, 300px)",
          gridGap: isWide ? "6px" : "3px",
        }}
      >
        {(products as any).map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div style={{ margin: "3px 0 0 6px" }}>
        <span>
          {page >= 1 && (
            <button
              onClick={() => {
                query.set("page", String(page - 1));
                history(`${location.pathname}?${query}`);
              }}
              disabled={page === 1 ? true : false}
            >
              Previous
            </button>
          )}
        </span>
        <span>{` | Page ${page} | `}</span>
        <span>
          {page <= numPages && (
            <button
              onClick={() => {
                query.set("page", String(page + 1));
                history(`${location.pathname}?${query}`);
              }}
              disabled={page === numPages ? true : false}
            >
              Next
            </button>
          )}
        </span>
      </div>
    </div>
  );
};
