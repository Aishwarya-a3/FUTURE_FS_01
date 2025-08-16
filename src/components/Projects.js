import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <img
              src="image.png"
              alt="Blood Group Detection"
            />
            <h3>Blood Group Detection using Image Processing</h3>
            <p>
              A machine learning & image processing project that identifies a person’s blood group from microscopic blood images, providing quick results for medical use.
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
              src="Lorex-Camera.png"
              alt="Smart Vision Guard"
            />
            <h3>Smart Vision Guard</h3>
            <p>
              An AI-powered surveillance system using YOLOv5 for real-time object detection, helping in security monitoring and intruder detection.
            </p>
          </div>
           <div className="project-card">
            <img
              src="imodel.jpg"
              alt="Elecrticity generation using rain water"
            />
            <h3>Elecrticity generation using rain water</h3>
            <p>
              Developed a small-scale model generating electricity from stored rainwater using gravity flow and a micro-turbine, promoting sustainable energy use.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
