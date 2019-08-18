import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <Link to="/">
          <img
            className="menu-avatar"
            src="https://avatars1.githubusercontent.com/u/16165432?v=4"
            alt="Camilo Dias da Silva"
          />
          <h1>.blog name</h1>
        </Link>
      </div>
      <div className="menu-body">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Sobre</Link>
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
