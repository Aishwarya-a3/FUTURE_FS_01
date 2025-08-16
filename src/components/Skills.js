// Skills.js
import React from "react";

const skills = ["React", "JavaScript", "HTML", "CSS", "Python", "Java", "Node.js", "MongoDB"];

function Skills() {
  return (
    <section id="skills" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>My Skills</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: "10px 15px",
              border: "1px solid #007bff",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;