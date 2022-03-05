import React, { useState } from "react";
import "../styles/carousel.scss";
import arrow from "../assets/arrow.svg";

export default function Carousel(props) {
  const [arrayIndex, setArrayIndex] = useState(0);
  const plusSlide = () => {
    arrayIndex >= props.pictures.length - 1
      ? setArrayIndex(0)
      : setArrayIndex(arrayIndex + 1);
  };
  const lessSlide = () => {
    arrayIndex === 0
      ? setArrayIndex(props.pictures.length - 1)
      : setArrayIndex(arrayIndex - 1);
  };

  return (
    <section className="carousel">
      <img
        className="carouselImg"
        src={props.pictures[arrayIndex]}
        alt="appartement"
      />
      {props.pictures.length > 1 ? (
        <div>
          <img
            className="carouselArrowLeft"
            onClick={lessSlide}
            src={arrow}
            alt="arrow"
          />
          <img
            className="carouselArrowRight"
            onClick={plusSlide}
            src={arrow}
            alt="arrow"
          />
        </div>
      ) : (
        ""
      )}
      <p className="carouselCounter">
        {arrayIndex + 1}/{props.pictures.length}
      </p>
    </section>
  );
}
