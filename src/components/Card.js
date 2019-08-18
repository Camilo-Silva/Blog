import React from "react";
import "./Card.css";

export default function Card({ image }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Testing" />
        <a href="https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <div class="card-image-toast">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p className="card-image-toast-date">June, 2019. Bla bla bla</p>
          </div>
        </a>
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
        {/* <div className="card-share">Author: Camilo Dias da Silva</div> */}
      </div>
    </div>
  );
}
