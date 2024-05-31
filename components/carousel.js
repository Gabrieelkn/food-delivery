"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slider4 from "../public/carousel1.jpg";
import Slider3 from "../public/carousel2.jpg";
import Slider1 from "../public/banner3.webp";
import Slider2 from "../public/banner4.webp";
import Image from "next/image";
import "../styles/carousel.css";
import { useState, useCallback, useEffect } from "react";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <SliderImage src={Slider1} />
        <SliderImage src={Slider2} />
        <SliderImage src={Slider3} />
        <SliderImage src={Slider4} />
      </div>
      <SliderBullets
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </div>
  );
}

function SliderImage({ src }) {
  return (
    <div className="embla__slide">
      <Image
        className="slider-image"
        src={src}
        width={400}
        height={200}
        alt="image"
      />
    </div>
  );
}

function SliderBullets({ scrollSnaps, selectedIndex, scrollTo }) {
  return (
    <div className="embla__bullets">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`embla__bullet ${
            index === selectedIndex ? "is-selected" : ""
          }`}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}
