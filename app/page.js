import { Carousel } from "@/components/carousel";
import FastFoodMenu from "@/components/products";
import "../styles/index.css";

export default function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <FastFoodMenu />
    </div>
  );
}
