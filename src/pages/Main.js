import React from "react";
import "./Main.css";

import Menu from "../components/Menu";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div className="main-wrapper">
      <nav>
        <Menu />
      </nav>
      <section />
    </div>
  );
}
