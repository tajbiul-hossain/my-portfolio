import React from "react";
import Typewriter from "typewriter-effect";
import "./fixed.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="top-banner bg-overlay" id="home">
      <div className="caption text-center">
        <h1>I'm Tajbiul Hossain</h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(400)
              .typeString("MERN Stack Developer")
              .pauseFor(400)
              .deleteAll()
              .typeString("Full Stack Web Developer")
              .deleteAll()
              .typeString("Web Designer")
              .pauseFor(1000)
              .start();
          }}
        />
        <a
          className="btn shadow-none default-btn resume-btn"
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
