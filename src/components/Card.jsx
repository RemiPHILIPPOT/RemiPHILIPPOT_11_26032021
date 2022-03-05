import React from "react";
import "../styles/card.scss";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <article className="appartementCard" key={props.index}>
      <NavLink
        className="appartementLink"
        to={`/apartment/${props.apartment.id}`}
      >
        <img
          className="appartementImg"
          src={props.apartment.cover}
          alt={props.apartment.title}
        />
        <h2 className="appartementTitle">{props.apartment.title}</h2>
      </NavLink>
    </article>
  );
}
