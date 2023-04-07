import React, { useState } from "react";
import "./images.css";
import Button from "./Button";
import { imageData as Image } from "../utils/imageLink";

const Images = () => {
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <React.Fragment>
      <div className="container image-section-wrapper mt-5">
        {Image.slice(page * 9 - 9, page * 9).map((ele, index) => (
          <div className="image-cont" key={index}>
            <img src={ele} alt="testingImages" />
          </div>
        ))}
      </div>

      {Image.length > 0 && (
        <div className="pagination-cont w-100 border d-flex justify-content-center align-items-center gap-3 mt-3">
          {[...Array(Image.length / 10)].map((_, i) => {
            return (
              <div
                className={`pagination ${
                  page === i + 1 ? "pagination__selected" : ""
                }`}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default Images;

// top level - account
// hover- prefernces, logout
// hover-preferences-settings, lang
