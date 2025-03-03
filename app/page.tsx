import React from "react";
import HeadingHomePage from "@/components/HomePages/HeadingHomePage";
import AboutSection from "@/components/HomePages/AboutSection";
import MomentSection from "@/components/HomePages/MomentSection";
import ContactSection from "@/components/HomePages/ContactSection";
import GalerySection from "@/components/HomePages/GalerySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faiq Subhi Ramadlan",
  description: "Portofolio Faiq Subhi Ramadlan",
  keywords: "Portofolio, Faiq Subhi Ramadlan, Photography, Photographer",
  authors: [{ name: "Faiq Subhi Ramadlan" }],
  creator: "Faiq Subhi Ramadlan",
  publisher: "Faiq Subhi Ramadlan",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Page() {
  return (
    <>
      <HeadingHomePage />
      <main className="px-5 lg:px-0 pb-10">
        <MomentSection />
        <AboutSection />
        <ContactSection />
        <GalerySection />
      </main>
    </>
  );
}
