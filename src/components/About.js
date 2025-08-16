import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm <span className="highlight">Aishwarya Bhandari</span>, a
          passionate Full Stack Developer with a strong interest in creating
          beautiful, functional, and user-friendly web applications.
        </p>
        <p>
          I enjoy learning new technologies, solving coding challenges, and
          contributing to innovative projects. My skills include{" "}
          <strong>React, JavaScript, HTML, CSS, Python, and Java</strong>.
        </p>
        <p>
          Outside of coding, I love exploring new design ideas and staying
          updated with the latest tech trends.
        </p>
      </div>
    </section>
  );
}

export default About;
