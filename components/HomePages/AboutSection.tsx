"use client";
import { lugrasimo } from "@/data/font";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-32 lg:gap-0 min-h-svh"
    >
      <section className="w-full lg:w-1/2 h-full">
        <h3 className={`${lugrasimo.className} mb-3`}>FaiqSR</h3>
        <h2 className={`${lugrasimo.className} text-3xl mb-2`}>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum quos necessitatibus nisi est, maxime
          dicta inventore repudiandae fugit adipisci quis doloremque veniam nemo voluptatum delectus numquam sint
          maiores ipsam, quisquam esse, quibusdam rerum. Nemo molestiae tempora, itaque veritatis, assumenda a ipsam ex
          distinctio, magnam quibusdam numquam! Nemo, deleniti nam amet reprehenderit quasi omnis in! A repellendus sit
          error quas nam eius rerum praesentium. Vero perferendis sequi, exercitationem quod, repellendus, sit fuga
          consectetur in dicta nemo eum magni alias velit adipisci amet? Velit voluptatibus aliquam modi ipsa ut eaque
          ullam voluptates sint vitae deleniti, quis dignissimos. Quod placeat nam doloremque.
        </p>
      </section>
      <section className="w-full lg:w-1/2 flex items-center justify-center">
        {/* <section className=""> */}
        <LazyLoadImage
          src="./images/aboutImage1.png"
          className="max-w-72 max-h-72 sm:max-w-[400px] sm:max-h-[400px] relative top-24 left-10 lg:left-20 z-10"
        />
        <LazyLoadImage
          src="./images/aboutImage2.png"
          className="max-w-72 max-h-72 sm:max-w-[400px] sm:max-h-[400px] relative -top-24 -left-10 lg:-left-0 "
        />
        {/* </section>s */}
      </section>
    </section>
  );
}

export default AboutSection;
