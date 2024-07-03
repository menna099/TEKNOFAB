import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

export default function Icons() {
  return (
    <>
      <ScrollToTop smooth className="hvr-pulse" />
      <a
        className="whats hvr-pulse"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=201110122012"

      >
        <IoLogoWhatsapp />
      </a>
    </>
  );
}