import { lugrasimo } from "@/data/font";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import React from "react";
import Link from "next/link";

function ContactSection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center justify-center gap-2 pt-40 pb-20 sm:py-28"
      id="contact"
    >
      <h2 className={`font-bold text-2xl ${lugrasimo.className}`}>Contacts</h2>
      <p>Email: faiqsr13@gmail.com</p>
      <section className="flex gap-5">
        <Link href={"https://instagram.com/faiq.w"} target="_blank">
          <BsInstagram size={30} />
        </Link>
        <Link href={"https://www.facebook.com/Faiq.Shi.Watagoto/"} target="_blank">
          <BsFacebook size={30} />
        </Link>
      </section>
    </section>
  );
}

export default ContactSection;
