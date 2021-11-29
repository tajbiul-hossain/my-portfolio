import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="service pb-3">
      <div className="service-img">
        <img src={props.img} alt="" />
      </div>
      <div className="service_info">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <button className="btn default-btn">See Details</button>
      </div>
    </div>
  );
};

export default Project;
