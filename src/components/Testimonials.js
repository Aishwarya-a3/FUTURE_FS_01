// Testimonials.js
import React from "react";

const testimonials = [
  { name: "John Doe", message: "Amazing developer, delivered the project on time!" },
  { name: "Jane Smith", message: "Highly skilled and passionate about coding." },
];

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "60px 20px", textAlign: "center", background: "#f8f9fa" }}>
      <h2>Testimonials</h2>
      <div style={{ maxWidth: "800px", margin: "20px auto" }}>
        {testimonials.map((t, idx) => (
          <div key={idx} style={{ marginBottom: "15px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <p>"{t.message}"</p>
            <strong>- {t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;