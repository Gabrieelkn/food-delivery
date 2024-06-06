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
        {item.name}{" "}
        {item.offer && item.offer !== "1+1" && (
          <span className="discount-span"> -{item.offer}%</span>
        )}{" "}
        <span className="category-name">{item.category}</span>
      </h4>
      <p className="ingredients">{item.ingredients}</p>
      {item.offer === "1+1" && <p className="one-free">1+1 free</p>}
      {item.offer && item.offer !== "1+1" ? (
        <div className="price-wrapper">
          <b className="old-price">{item.price.toFixed(2)} $</b>
          <b className="discounted-price">
            {((item.price * (100 - item.offer)) / 100).toFixed(2)} $
          </b>
        </div>
      ) : (
        <b>{item.price.toFixed(2)} $</b>
      )}

      <button className="product-button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}
