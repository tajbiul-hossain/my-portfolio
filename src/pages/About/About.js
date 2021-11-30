import React from "react";
import about1 from "../../images/about-1.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      {/* <div className="about-head">
        <h2 className="about-title">About</h2>
      </div> */}
      <div className="container text-start pt-5">
        <h1 className="pb-3 pt-5 fw-normal">My Story</h1>
        <div className="w-75 mx-auto">
          <p style={{ color: "#7a838b", textAlign: "justify" }}>
            “Hello there. I am <strong>Tajbiul Hossain</strong>. A web developer
            and designer from Chittagong, Bangladesh. I am currently enrolled in
            a bachelor's degree in CSE at University of Chittagong, Bangladesh.
            As part of my study I have some experience in frontend and backend
            development, and have excellent knowledge of web services.
            <br />
            <br />
            I create custom SPA websites to help people expand there businesses
            online. Give me any design and I will turn that into a beautiful
            interface. I also love coding and always try to write elegant and
            eficient code whether it be C++, HTML, CSS, JavaScript or JQuery.
            <br />
            <br />
            When I'm not developing a website or coding, you'll find me
            somewhere capturing photos for my instagram. Also I love to travel a
            lot.
            <br />
            <br />
            I'm currently open to work and excited to continue refinig my skills
            with the right company. If you are interested in using my skills as
            a developer then contact me through my contact form or social medias
            provided in the footer section.
          </p>
        </div>
        <div className="row my-5">
          <div className="col-12 text-center">
            <img className="img-fluid w-50" src={about1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
