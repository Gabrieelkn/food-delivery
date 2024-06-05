"use client";
import { useState } from "react";
import products from "../data.json";
import Products from "./products";
import Image from "next/image";
import Burger from "../public/burger.png";

export default function Filter() {
  const [activeCategories, setActiveCategories] = useState([]);
  let filteredProducts = products;

  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  function handleActiveCategory(category) {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((cat) => cat !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  }

  filteredProducts =
    activeCategories.length > 0
      ? products.filter((product) =>
          activeCategories.includes(product.category)
        )
      : products;

  return (
    <>
      <div className="image-text-wrapper">
        <Image src={Burger} height={40} width={40} alt="icon" />
        <h2>{filteredProducts.length} products available</h2>
      </div>
      <div className="category-wrapper">
        {uniqueCategories.map((category) => (
          <button
            onClick={() => handleActiveCategory(category)}
            className={`category ${
              activeCategories.includes(category) ? "active-category" : ""
            }`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <Products filteredProducts={filteredProducts} />
    </>
  );
}
