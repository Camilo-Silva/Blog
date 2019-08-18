import React from "react";
import "./Content.css";

import Card from "./Card";

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-cards">
        <Card image="https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Card image="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Card image="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Card image="https://images.pexels.com/photos/1544884/pexels-photo-1544884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
    </div>
  );
}
