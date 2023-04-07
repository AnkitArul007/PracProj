import React, { useState } from "react";
import "./images.css";
import Button from "./Button";
import { imageData as Image } from "../utils/imageLink";

const pageCount = Image.length / 10;

const Images = () => {
  return (
    <React.Fragment>
      <div className="container image-section-wrapper mt-5">
        {Image.slice(10, 19).map((ele, index) => (
          <div className="image-cont" key={index}>
            <img src={ele} alt="testingImages" />
          </div>
        ))}
      </div>
      <div className="pagination-cont d-flex justify-content-center align-items-center mt-3">
        <Button title={1} />
        <Button title={2} />
        <Button title={3} />
        <Button title={4} />
      </div>
    </React.Fragment>
  );
};

export default Images;

// top level - account
// hover- prefernces, logout
// hover-preferences-settings, lang
