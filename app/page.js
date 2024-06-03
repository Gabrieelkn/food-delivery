import { Carousel } from "@/components/carousel";
import FastFoodMenu from "@/components/menu";
import "../styles/index.css";

export default function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <FastFoodMenu />
    </div>
  );
}
