"use client";
import { motion as m, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Lugrasimo } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { dummyData, dummyData2 } from "@/data/index";
import { LazyLoadImage } from "react-lazy-load-image-component";

const lugrasimo = Lugrasimo({
  subsets: ["latin"],
  weight: "400",
});

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  key?: number;
}

export default function page() {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        dummyData2.map(async (data, index) => {
          return {
            ...data,
            key: index,
          };
        })
      );
      setImages(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <header>
        <section className="flex min-h-[50vh] flex-col items-center justify-center ">
          <h1 className={`${lugrasimo.className} text-3xl `}>
            Alreda Photograph
          </h1>
          <h3 className={`${lugrasimo.className}`}>Capture your moment</h3>
        </section>
        <ImageCarousell src={"https://picsum.photos/1920/1080"} alt="test" />
      </header>
      <main className="px-5 lg:px-0 pb-10">
        <section className=" pt-24 px-5">
          <section className="container mx-auto flex flex-col items-center">
            <h2 className={`${lugrasimo.className} text-2xl mb-3`}>
              How we take a picture
            </h2>
            <p className="lg:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              voluptatum quae veniam velit voluptas ducimus veritatis animi odit
              rerum beatae dolor numquam maiores modi itaque. Assumenda, officia
              quas quos porro, qui, impedit est nesciunt aliquam dolore maxime
              quis ipsum laudantium similique! Ducimus voluptate est fugiat
              officia facere ab explicabo eveniet.
            </p>
            <p className="py-5">
              See our instagram{" "}
              <a
                href="#"
                className="text-blue-500 underline-offset-2 underline"
              >
                Alreda Photograph
              </a>
            </p>
          </section>
          <section className="container mx-auto flex flex-wrap flex-auto py-5 gap-10 justify-center">
            {images.map((data) => (
              <ImagePicture key={data.key} src={data.src} alt={data.alt} />
            ))}
          </section>
        </section>
        <section
          id="about"
          className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-32 lg:gap-0 min-h-svh"
        >
          <section className="w-full lg:w-1/2 h-full">
            <h3 className={`${lugrasimo.className} mb-3`}>Alreda</h3>
            <h2 className={`${lugrasimo.className} text-3xl mb-2`}>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cum quos necessitatibus nisi est, maxime dicta inventore
              repudiandae fugit adipisci quis doloremque veniam nemo voluptatum
              delectus numquam sint maiores ipsam, quisquam esse, quibusdam
              rerum. Nemo molestiae tempora, itaque veritatis, assumenda a ipsam
              ex distinctio, magnam quibusdam numquam! Nemo, deleniti nam amet
              reprehenderit quasi omnis in! A repellendus sit error quas nam
              eius rerum praesentium. Vero perferendis sequi, exercitationem
              quod, repellendus, sit fuga consectetur in dicta nemo eum magni
              alias velit adipisci amet? Velit voluptatibus aliquam modi ipsa ut
              eaque ullam voluptates sint vitae deleniti, quis dignissimos. Quod
              placeat nam doloremque.
            </p>
          </section>
          <section className="w-full lg:w-1/2 flex items-center justify-center">
            {/* <section className=""> */}
            <LazyLoadImage
              src="https://picsum.photos/720/1280"
              className="max-w-80 max-h-96 relative top-24 left-10 lg:left-20"
            />
            <LazyLoadImage
              src="https://picsum.photos/721/1280"
              className="max-w-80 max-h-96 relative -top-24 -left-10 lg:-left-0"
            />
            {/* </section>s */}
          </section>
        </section>
        <section
          className="container mx-auto text-center pt-40 pb-20 sm:py-28"
          id="contact"
        >
          <h2 className={`font-bold text-2xl ${lugrasimo.className}`}>
            Contacts
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <section className="container mx-auto" id="galery">
          <h1 className={`${lugrasimo.className} text-2xl text-center mb-5`}>
            More photos
          </h1>
          <section className="flex flex-wrap justify-center items-center">
            {dummyData.map((data, index) => (
              <ImageRow key={index} src={data.src} alt={data.alt} />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

const ImageCarousell = (props: ImageProps) => {
  const ref = useRef(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start 0.1"],
  });

  const padding = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [50, 0] : [10, 0]
  );

  return (
    <>
      <m.section
        className="w-full h-full"
        ref={ref}
        style={{ paddingLeft: padding, paddingRight: padding }}
        suppressHydrationWarning
      >
        <LazyLoadImage
          src={props.src}
          width={1920}
          height={1080}
          className="object-fill w-full max-h-svh rounded-lg"
        />
      </m.section>
    </>
  );
};

const ImageRow = (props: ImageProps) => {
  return (
    <>
      <section className="w-40 h-40 sm:w-80 sm:h-80">
        <LazyLoadImage
          loading="lazy"
          src={props.src}
          className="object-cover w-full h-full"
        />
      </section>
    </>
  );
};

const ImagePicture = (props: ImageProps) => {
  return (
    <>
      <section className="flex flex-col lg:max-w-[400px] text-slate-500 hover:text-slate-950 transition-all">
        <section className="lg:w-[400px] lg:h-[400px]">
          <LazyLoadImage
            src={props.src}
            className="object-cover h-full w-full"
          />
        </section>
        <section className="text-center py-7 ">
          <h3 className={`text-xl ${lugrasimo.className}`}>With a smile</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </section>
      </section>
    </>
  );
};
