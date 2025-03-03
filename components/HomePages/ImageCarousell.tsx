"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion as m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  key?: number;
}

export default function ImageCarousell(props: ImageProps) {
  const ref = useRef(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start 0.1"],
  });

  const padding = useTransform(scrollYProgress, [0, 1], isLargeScreen ? [50, 0] : [10, 0]);

  return (
    <>
      <m.section
        className="w-full h-full"
        ref={ref}
        style={{ paddingLeft: padding, paddingRight: padding }}
        suppressHydrationWarning
      >
        <LazyLoadImage src={props.src} width={1920} height={1080} className="object-fill w-full max-h-svh rounded-lg" />
      </m.section>
    </>
  );
}
