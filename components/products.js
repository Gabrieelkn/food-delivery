"use client";
import "../styles/index.css";
import { useContext } from "react";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import Cart from "./cartBar";

export default function FastFoodMenu() {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const items = [
    {
      id: 1,
      name: "Cheeseburger",
      description:
        "A delicious cheeseburger with a juicy beef patty, cheese, lettuce, tomato, and special sauce.",
      price: 9.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description:
        "A classic pepperoni pizza with a crispy crust, tangy tomato sauce, and melted mozzarella cheese.",
      price: 9.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      description:
        "Crispy and golden chicken nuggets served with your choice of dipping sauce.",
      price: 5.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "French Fries",
      description:
        "Classic french fries, crispy on the outside and soft on the inside, seasoned to perfection.",
      price: 3.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Caesar Salad",
      description:
        "Fresh romaine lettuce, croutons, and Parmesan cheese tossed in a creamy Caesar dressing.",
      price: 6.5,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "BBQ Chicken Sandwich",
      description:
        "Grilled chicken breast with BBQ sauce, lettuce, tomato, and onions on a toasted bun.",
      price: 7.5,
      quantity: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Veggie Burger",
      description:
        "A hearty veggie burger made with black beans, corn, and spices, topped with lettuce and tomato.",
      price: 7.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Hot Dog",
      description:
        "A classic hot dog with your choice of toppings: ketchup, mustard, onions, and relish.",
      price: 4.0,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Chocolate Milkshake",
      description:
        "A rich and creamy chocolate milkshake made with real ice cream and topped with whipped cream.",
      price: 4.5,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Fish Tacos",
      description:
        "Soft tortillas filled with crispy fish, cabbage slaw, and a tangy lime sauce.",
      price: 8.0,
      quantity: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681406995032-c3ceeb24d7f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <h1 className="products-header">Menu</h1>
      <div className="products">
        <div className="products-wrapper">
          {items.map((item) => (
            <div className="product-card" key={item.id}>
              <Image
                className="product-image"
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
              />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <b>${item.price.toFixed(2)}</b>
              <button
                className="product-button"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Cart />
      </div>
    </>
  );
}
