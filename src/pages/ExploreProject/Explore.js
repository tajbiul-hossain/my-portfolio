import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router";
import "./Explore.css";
const Explore = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const current = data.filter(
          (project) => project.id === parseInt(projectId)
        );
        setProject(current[0]);
      });
  }, [projectId]);

  if (Object.keys(project).length < 1) return "loadign";

  return (
    <div className="explore pt-5">
      <div className="container">
        <h1 className="pt-5 pb-3 fw-normal text-start">{project.name}</h1>
        <div className="mb-5">
          <Carousel fade variant="dark">
            {project.images.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="d-flex justify-content-start py-3">
          <a
            href={project.live_site}
            target="_blank"
            rel="noreferrer"
            className="btn default-btn me-2"
          >
            Preview
          </a>
          <a
            href={project.client_link}
            target="_blank"
            rel="noreferrer"
            className="btn default-btn me-2"
          >
            Client Code
          </a>
          <a
            href={project.server_link}
            target="_blank"
            rel="noreferrer"
            className="btn default-btn"
          >
            Server Code
          </a>
        </div>
        <div className="py-3">
          <h1 className="text-start">Features</h1>
          <ul>
            {project.features.map((feature) => (
              <li key={feature} className="text-start">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
