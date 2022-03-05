import React from "react";
import logo from "../assets/LOGO.svg";
import "../styles/header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Kasa" aria-label="logo kasa" />
      </NavLink>
      <nav>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
        <NavLink to="/About" className="about">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}
