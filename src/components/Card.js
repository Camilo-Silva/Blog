import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ image }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Testing" />
        <Link to="/post/">
          <div class="card-image-toast">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p className="card-image-toast-date">June, 2019. Bla bla bla</p>
          </div>
        </Link>
      </div>
      <div className="card-content">
        <div className="card-header">
          <Link to="/post/">
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          </Link>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dapibus eros ornare, consequat lectus eu, aliquet tortor. Nam
            laoreet magna nibh, sit amet posuere lorem consectetur eget. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus
            eros ornare, consequat lectus eu, aliquet tortor. Nam
          </p>
        </div>
        <div className="card-footer">
          <Link to="/post/">
            <button type="button" className="card-button">
              Read more ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
