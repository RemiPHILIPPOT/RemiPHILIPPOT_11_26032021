import React from "react";
import footer_logo from "../assets/FOOTER_LOGO.svg";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <img src={footer_logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
