import React from "react";
import Typewriter from "typewriter-effect";
const Blog = () => {
  return (
    <div>
      <div className="about-head">
        <h2 className="about-title">My Blogs</h2>
      </div>
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(400)
              .typeString("still working on this part")
              .pauseFor(400)
              .deleteAll()
              .typeString("coming soon...")
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default Blog;
