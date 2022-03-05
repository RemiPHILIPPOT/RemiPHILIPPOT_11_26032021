import React, { useState } from "react";
import "../styles/dropdown.scss";
import dropdown_arrow from "../assets/dropdown-arrow.svg";

export default function Dropdown(props) {
  const [isToggleOn, setisToggleOn] = useState(false);

  const handleClick = () => {
    setisToggleOn(!isToggleOn);
  };

  const { dropDownTitle, dropDownContent } = props;

  return (
    <details className="dropdown">
      <summary className="dropdownClick" onClick={handleClick}>
        <h2 className="dropdownTitle">{dropDownTitle}</h2>
        <img
          className={isToggleOn ? "dropdownArrow-active" : "dropdownArrow"}
          src={dropdown_arrow}
          alt="arrow"
        />
      </summary>
      <div className="dropdownContent">{dropDownContent}</div>
    </details>
  );
}
