import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 text-start">
            <h4 className="name">TH</h4>
            <p>
              I am currently enrolled in a bachelor's degree in CSE at
              University of Chittagong, Bangladesh. As part of my study I have
              some experience in frontend and backend development, and have
              excellent knowledge of web services.
            </p>
          </div>
          <div className="col-12 col-md-3 text-start services ms-0 ms-md-5">
            <h5 className="mb-4">Services</h5>
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "300" }}
              >
                <p>Web Development</p>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "300" }}
              >
                <p>Web Design</p>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "300" }}
              >
                <p>Frontend</p>
              </div>
            </div>
          </div>
          <div className="social col-12 col-md-3 text-start ps-md-4">
            <h6 className="text-capitalize">follow me</h6>
            <p>let us be social</p>
            <div className="social-icons mt-4">
              <a
                href="https://github.com/tajbiul-hossain"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tajbiul-hossain/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/tajbi90"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="footer-line"></div>
          <p className="mt-4">&copy; TH || Feel Free to Connect</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
