"use client";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useContext } from "react";

export default function ProductCard({ item, id }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card" key={id}>
      <Image
        className="product-image"
        src={item.imageUrl}
        alt={item.name}
        width={100}
        height={100}
      />
      <h4>
        {item.name} <span className="category-name">{item.category}</span>
      </h4>
      <p className="ingredients">{item.ingredients}</p>
      <b>${item.price.toFixed(2)}</b>
      <button className="product-button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}
