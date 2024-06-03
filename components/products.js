import Cart from "./cartBar";
import ProductCard from "./productCard";

export default function Products({ filteredProducts }) {
  return (
    <div className="products">
      <div className="products-wrapper">
        {filteredProducts.map((item) => (
          <ProductCard item={item} key={item.id} id={item.id} />
        ))}
      </div>
      <Cart />
    </div>
  );
}
