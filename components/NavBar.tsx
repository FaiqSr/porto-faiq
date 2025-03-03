"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { lugrasimo } from "@/data/font";

const NavBar = () => {
  const [scrollYNavBar, setScrollYNavBar] = useState(false);

  const backgroundColorChange = () => {
    if (window.scrollY > 100) {
      setScrollYNavBar(true);
    } else {
      setScrollYNavBar(false);
    }
  };

  useEffect(() => {
    backgroundColorChange();

    window.addEventListener("scroll", backgroundColorChange);
  });

  return (
    <>
      <header
        className={`fixed w-full mx-auto transition-all z-50 ${scrollYNavBar ? "bg-slate-100 py-2 shadow-lg" : ""}`}
      >
        <nav
          className={`flex justify-center transition-all p-5 ${
            scrollYNavBar ? "" : "flex items-center justify-between"
          }`}
        >
          <h1 className={`lg:text-3xl transition-all ${lugrasimo.className} ${scrollYNavBar ? "hidden" : ""} `}>
            FaiqSr
          </h1>
          <ul className="flex space-x-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="#galery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
