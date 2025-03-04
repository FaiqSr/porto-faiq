"use client";
import { galeryImage } from "@/data";
import { lugrasimo } from "@/data/font";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  key?: number;
}
function GalerySection() {
  return (
    <section className="container mx-auto" id="galery">
      <h1 className={`${lugrasimo.className} text-2xl text-center mb-5`}>More photos</h1>
      <section className="flex flex-wrap justify-center items-center">
        {galeryImage
          .slice()
          .sort(() => Math.random() - 0.5)
          .map((data, index) => (
            <ImageRow key={index} src={data.src} alt={data.alt} />
          ))}
      </section>
    </section>
  );
}

export default GalerySection;

const ImageRow = (props: ImageProps) => {
  return (
    <>
      <section className="w-40 h-40 sm:w-80 sm:h-80">
        <LazyLoadImage loading="lazy" alt={props.alt} src={props.src} className="object-cover w-full h-full" />
      </section>
    </>
  );
};
