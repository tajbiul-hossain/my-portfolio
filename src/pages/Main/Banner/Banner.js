import React from "react";
import "./fixed.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="top-banner bg-overlay" id="home">
      <div class="caption text-center">
        <h1>I'm Tajbiul Hossain</h1>
        <h3>A MERN Stack Developer</h3>
        <a
          class="btn shadow-none default-btn resume-btn"
          href="https://drive.google.com/file/d/1JKhZQb2t2qFHdX9giX5FiarM9_COY3mW/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
