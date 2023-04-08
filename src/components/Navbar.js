import React, { useState } from "react";
// import { Link } from "react-router dom";
import "./navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [showExtraOpt, setShowExtraOpt] = useState(false);
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  return (
    <div className="wrapper container pt-3 d-flex justify-content-between align-items-start">
      <h3 className="fs-xs-6">The Image Library</h3>

      <div className="links-cont d-flex gap-md-2">
        <div className="Links">
          <Button title="Home" />
        </div>
        <div className="Links">
          <Button title="About Us" />
        </div>
        <div className="Links">
          <Button title="Career" />
        </div>
        <div
          className="Links position-relative"
          onClick={(e) => {
            setShowExtraOpt(!showExtraOpt);
            console.log(showExtraOpt);
          }}
        >
          <Button title="Contact Us" />

          <div
            className={`extra-options bg-light py-3 position-absolute ${
              showExtraOpt ? "show" : ""
            }`}
            onMouseOut={(e) => {
              setShowExtraInfo(false);
            }}
          >
            <ul>
              <li>Option A</li>
              <li
                className="position-relative"
                onMouseOver={(e) => {
                  setShowExtraInfo(true);
                }}
              >
                Option B
                <span
                  className={`container extra-info position-absolute bg-light fs-6 ${
                    showExtraInfo ? "show" : ""
                  }`}
                  onMouseOver={(e) => setShowExtraInfo(true)}
                  onMouseOut={(e) => setShowExtraInfo(false)}
                >
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                  </ul>
                </span>
              </li>
              <li>Option C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
