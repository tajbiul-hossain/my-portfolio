import React from "react";
import { Row } from "react-bootstrap";
import Project from "../Project/Project";
import project1 from "../../../images/project-1.png";
import project2 from "../../../images/project-2.png";
import project3 from "../../../images/project-3.png";

const Projects = () => {
  return (
    <div id="projects" className="container pt-5">
      <div className="mt-3 mb-5 section-heading">
        <h2>Top Projects</h2>
      </div>
      <div className="heading-underline"></div>
      <div className="news-container">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Project
            name="Time Zone"
            desc="An online watch store where you can buy any watch of your choice. See what clients are saying about the store and please give your valuable review."
            img={project1}
          />
          <Project
            name="Travelo"
            desc="An online travel agency where you can book any package of your choice. Connect with us to get the best time of your life from your next vacation."
            img={project2}
          />
          <Project
            name="Dental Depot"
            desc="An online dental health care service where you can book appointment with dentists. Connect with us to get the best treatment from your next visit."
            img={project3}
          />
        </Row>
      </div>
    </div>
  );
};

export default Projects;
