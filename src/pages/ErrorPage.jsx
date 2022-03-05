import React from "react";
import "../styles/errorPage.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="errorPage">
      <p className="errorPage404">404</p>
      <p className="errorPageText">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link className="errorPageLink" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
