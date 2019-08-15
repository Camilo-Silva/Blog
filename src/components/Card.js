import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Testing"
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
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
          <button type="button" className="card-button">
            Read more...
          </button>
        </div>
        <div className="card-share">Author: Camilo Dias da Silva</div>
      </div>
    </div>
  );
}
