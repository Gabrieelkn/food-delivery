import "../../styles/index.css";
import products from "../../data.json";
import ProductCard from "@/components/productCard";
import Cart from "@/components/cartBar";

export default function Offers() {
  const offerProducts = products.filter((p) => p.offer);

  return (
    <>
      <h1 className="offers-header">Offers</h1>
      <div className="products offers">
        <div className="products-wrapper">
          {offerProducts.map((p) => {
            return <ProductCard id={p.id} key={p.id} item={p} />;
          })}
        </div>
        <Cart />
      </div>
    </>
  );
}
