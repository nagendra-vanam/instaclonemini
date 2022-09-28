import React from "react";
import "./postview/App.css";
import { Link } from "react-router-dom";
const Top = () => {
  return (
    <div>
      <div className="header">
        <div>
          <span className=" fa fa-brands fa-instagram fa-2xl"></span>
          <span className="clone">Instagram</span>
        </div>
        <Link to="/upload">
          <i className=" fa fa-thin fa-camera cam fa-xl"></i>
        </Link>
      </div>
      <div className="line"> </div>
    </div>
  );
};

export default Top;
