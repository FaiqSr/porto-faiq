"use client";
import React from "react";
import { lugrasimo } from "@/data/font";
import ImageCarousell from "./ImageCarousell";

function HeadingHomePage() {
  return (
    <header>
      <section className="flex min-h-[50vh] flex-col items-center justify-center ">
        <h1 className={`${lugrasimo.className} text-3xl `}>Faiq Subhi Ramadlan</h1>
        <h3 className={`${lugrasimo.className}`}>Create a moment with me</h3>
      </section>
      <ImageCarousell src={"./images/homeImage.JPG"} alt="test" />
    </header>
  );
}

export default HeadingHomePage;
