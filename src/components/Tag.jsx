import React from "react";
import "../styles/tag.scss";

export default function Tag(props) {
  const { tag } = props;

  return <div className="tag">{tag}</div>;
}
