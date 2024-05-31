"use client";
import { useState, useEffect, useRef, useContext } from "react";
import CartContext from "@/context/CartContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";
import { GoSmiley } from "react-icons/go";

export default function Cart() {
  const [scrolledToTop, setScrolledToTop] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const cartRef = useRef();

  const totalQuantity = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function handleOpenCart() {
    if (cartRef.current) {
      cartRef.current.classList.add("open-cart");
    }
  }

  function handleCloseCart() {
    cartRef.current.classList.remove("open-cart");
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (cartRef.current) {
        const rect = cartRef.current.getBoundingClientRect();
        setScrolledToTop(rect.top <= 0);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    if (window.innerWidth < 1440) {
      const handleOutsideClick = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
          cartRef.current.classList.remove("open-cart");
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <button className="open-cart-btn" onClick={handleOpenCart}>
          You added {totalQuantity} {totalQuantity > 1 ? "products" : "product"}
        </button>
      ) : null}
      <div
        ref={cartRef}
        className={`cart ${scrolledToTop ? "scrolled-to-top" : ""}`}
      >
        <div className="cart-header">
          <h2>Your order</h2>
          <button onClick={handleCloseCart} className="close-cart-btn">
            <IoCloseCircleOutline className="icon" />
          </button>
        </div>
        {cart.length > 0 ? (
          <>
            <div className="cart-products-wrapper">
              {cart.map((product) => (
                <ProductCardCart
                  key={product.id}
                  id={product.id}
                  removeFromCart={removeFromCart}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
            <TotalPrice cart={cart} />
          </>
        ) : (
          <div className="cart-products-wrapper">
            <span>
              {" "}
              The products you add will appear here <GoSmiley />
            </span>
          </div>
        )}
      </div>
    </>
  );
}

function TotalPrice({ cart }) {
  return (
    <div className="total-price">
      <h2>
        TOTAL:{" "}
        {cart.reduce(
          (sum, product) => sum + product.quantity * product.price,
          0
        )}
        $
      </h2>
      <button className="check-out-btn">Check out</button>
    </div>
  );
}

function ProductCardCart({ removeFromCart, product, addToCart, id }) {
  return (
    <div className="product-card-cart" key={id}>
      <div className="product-cart-header">
        <h3 className="product-cart-quantity">x{product.quantity}</h3>
        <p>{product.name} </p>
        <p>{product.price * product.quantity} $</p>
      </div>
      <div className="product-buttons">
        <button
          className="change-quantity-btn"
          onClick={() => removeFromCart(product)}
        >
          <TiMinus />
        </button>
        <p className="product-description">{product.description}</p>
        <button
          className="change-quantity-btn"
          onClick={() => addToCart(product)}
        >
          <TiPlus />
        </button>
      </div>
    </div>
  );
}
