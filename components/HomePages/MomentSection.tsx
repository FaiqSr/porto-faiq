"use client";
import { momentSectionImage } from "@/data/index";
import React from "react";
import { lugrasimo } from "@/data/font";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  key?: number;
  text: string;
}

function MomentSection() {
  return (
    <section className=" pt-24 px-5">
      <section className="container mx-auto flex flex-col items-center">
        <h2 className={`${lugrasimo.className} text-2xl mb-3`}>How we take a picture</h2>
        <p className="lg:text-center">
          Dengan menangkap momen yang indah sebuah gambar bisa berbicara tentang apa yang sedang terjadi
        </p>
        <p className="py-5">
          See our instagram{" "}
          <a href="https://instagram.com/faiq.w" target="_blank" className="text-blue-500 underline-offset-2 underline">
            faiq.w
          </a>
        </p>
      </section>
      <section className="container mx-auto flex flex-wrap flex-auto py-5 gap-10 justify-center">
        {momentSectionImage.map((data, index) => (
          <ImagePicture key={index} src={data.src} alt={data.alt} text={data.text} />
        ))}
      </section>
    </section>
  );
}

export default MomentSection;

const ImagePicture = (props: ImageProps) => {
  return (
    <>
      <section className="flex flex-col lg:max-w-[400px] text-slate-500 hover:text-slate-950 transition-all">
        <section className="lg:w-[400px] lg:h-[400px]">
          <LazyLoadImage src={props.src} className="object-cover h-full w-full" />
        </section>
        <section className="text-center py-7 ">
          <h3 className={`text-xl ${lugrasimo.className}`}>{props.text}</h3>
        </section>
      </section>
    </>
  );
};
