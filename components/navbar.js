"use client";
import Link from "next/link";
import "../styles/index.css";
import { RiMenu5Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function NavigationBar() {
  const [visible, setVisible] = useState(false);
  const path = usePathname();
  const navRef = useRef();
  const hamburgerRef = useRef();

  const toggleMenu = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }, [path, setVisible]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button
        ref={hamburgerRef}
        className="hamburger"
        onClick={toggleMenu}
        aria-label="hamburger"
      >
        <RiMenu5Fill className="nav-icon" />
      </button>
      <nav ref={navRef} className={visible ? "nav nav-active" : "nav"}>
        <ul>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/menu/offers">Offers</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
