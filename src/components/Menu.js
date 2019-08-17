import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <a href="http://localhost:3000/">
          <img
            className="menu-avatar"
            src="https://avatars1.githubusercontent.com/u/16165432?v=4"
            alt="Camilo Dias da Silva"
          />
          <h1>.blog name</h1>
        </a>
      </div>
      <div className="menu-body">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </div>
      <div className="menu-footer">
        <div className="social">
          <a href="https://github.com/camilodsilva">
            <i class="fa fa-github" aria-hidden="true" />
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/camilodsilva">
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
