"use client";
import products from "../data.json";
import ProductCard from "./productCard";
import { useEffect, useState, useRef } from "react";
import useOutsideClick from "@/hooks/useClickOutside";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filteredProductsRef = useRef();

  useEffect(() => {
    if (query.length > 0) {
      const newFilteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(newFilteredProducts);
    } else if (query.length === 0) {
      setFilteredProducts([]);
    }
  }, [query]);

  useOutsideClick(filteredProductsRef, (event) => {
    if (!filteredProductsRef.current.contains(event.target)) {
      setQuery("");
      setFilteredProducts([]);
    }
  });

  return (
    <>
      <div className="search-bar">
        <input
          className="search-bar-input"
          placeholder="What would you like to eat?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      {filteredProducts.length > 0 ? (
        <div ref={filteredProductsRef} className="filtered-products-wrapper">
          {filteredProducts.map((item) => {
            return <ProductCard item={item} key={item.id} id={item.id} />;
          })}
        </div>
      ) : null}
    </>
  );
}
