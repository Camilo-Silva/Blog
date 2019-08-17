import React from "react";
import "./Content.css";

import Card from "./Card";

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
