import React from "react";
import "../styles/banner.scss";

export default function Banner(props) {
  const { imgContent, imgSrc, imgAlt, imgClass } = props;

  return (
    <div className="banner">
      <img className={imgClass} src={imgSrc} alt={imgAlt} />
      <h1 className="bannerTitle">{imgContent}</h1>
    </div>
  );
}
