import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="service pb-3">
      <div className="service-img">
        <img src={project.images[0]} alt="" />
      </div>
      <div className="service_info">
        <h3>{project.name}</h3>
        <p>{project.short_desc}</p>
      </div>
      <div>
        <NavLink as={Link} to={`/explore/${project.id}`}>
          <button className="btn default-btn">See Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Project;
