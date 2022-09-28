import React from "react";
import { Link } from "react-router-dom";
import image from "./Landingpage.jpg";
import "./landingpage.css";
export default function Landing_page() {
  return (
    <div className="landingpage">
      <p className="img1"></p>
      <div className="secondcard">
        <div className="card"> Welcome to Instagram</div>
        <span className="enter">
          <Link className="enter1" to="/postview">
            Enter
          </Link>
        </span>
      </div>
    </div>
  );
}
