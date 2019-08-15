import React from "react";
import "./Content.css";

import Card from "./Card";

export default function Content() {
  return (
    <section className="content-container">
      <div className="content-posts content-clearfix">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
