import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Project from "../Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="projects" className="container pt-5">
      <div className="mt-3 mb-5 section-heading">
        <h2>Top Projects</h2>
      </div>
      <div className="heading-underline"></div>
      <div className="news-container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
