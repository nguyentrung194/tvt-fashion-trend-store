import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isOpenContext } from "../../../App";
import useMedia from "../../../hooks/use-media";
import { useQueryURL } from "../../../hooks/use-query-url";

export const FilterProduct: React.FC<{}> = () => {
  const isWide = useMedia("(min-width: 480px)");
  const { isOpen } = useContext(isOpenContext);

  const location = useLocation();
  const history = useNavigate();
  const query = useQueryURL();

  const [search, setSearch] = React.useState(query.get("search") || "");
  const [sortDate, setSortDate] = React.useState(
    query.get("sortbydate") ? [query.get("sortbydate")] : []
  );
  const [categories, setCategories] = React.useState(
    query.get("categories") ? [query.get("categories")] : []
  );
  const handleClearFilter = (e: Event) => {
    e.preventDefault();
    setSearch("");
    setCategories([]);
    setSortDate([]);
    query.delete("search");
    query.delete("categories");
    query.delete("sortbydate");
    history(`${location.pathname}?${query}`);
  };
  return (
    <>
      <div
        style={{
          paddingTop: isWide ? "20px" : "130px",
          position: isWide ? "sticky" : "fixed",
          top: isWide ? 100 : 0,
          background: "white",
          width: `calc(var(--vw, 1vw) * ${isWide ? 20 : 80})`,
          zIndex: isWide ? 9 : 9997,
          height: isWide ? "" : "calc(var(--vh, 1vh) * 100)",
          left: !(isWide || isOpen.get) ? "-700px" : 0,
          boxShadow: isWide
            ? ""
            : "calc(var(--vw, 1vw) * 20) 0 0 rgba(136, 136, 136, 0.329)",
        }}
      >
        {isWide ? null : (
          <button
            style={{
              position: "absolute",
              top: "100px",
              right: "30px",
              padding: "20px",
              border: "none",
              background: "transparent",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => {
              isOpen.set(false);
            }}
          >
            X
          </button>
        )}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <input
                placeholder="Tìm kiếm sản phẩm..."
                value={search}
                onChange={(e: any) => {
                  setSearch(e.target.value);
                  query.delete("page");
                  query.set("search", e.target.value);
                  history(`${location.pathname}?${query}`);
                }}
              />
              <select
                onChange={({ target: { value } }: any) => {
                  query.delete("page");
                  setCategories([value]);
                  query.set("categories", value);
                  history(`${location.pathname}?${query}`);
                }}
                placeholder="Filter by categories"
                name="categories"
                value={categories[0] as any}
                size={1}
              >
                <option value="">Filter by categories</option>
                <option value="Women Dress">Women Dress</option>
                <option value="Tops">Tops</option>
              </select>

              <select
                placeholder="Sort by date"
                name="sortbydate"
                value={sortDate[0] as any}
                onChange={({ target: { value } }: any) => {
                  query.delete("page");
                  setSortDate([value]);
                  query.set("sortbydate", value);
                  history(`${location.pathname}?${query}`);
                }}
                size={1}
              >
                <option value="">Sort by date</option>
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
              </select>
              <button onClick={(e: any) => handleClearFilter(e)}>
                Reset Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: !isWide && isOpen.get ? "0px" : "-700px",
          right: !isWide && isOpen.get ? "0px" : "-700px",
          width: "calc(var(--vw, 1vw) * 20)",
          height: "calc(var(--vh, 1vh) * 100)",
          zIndex: 999,
        }}
      ></div>
    </>
  );
};
