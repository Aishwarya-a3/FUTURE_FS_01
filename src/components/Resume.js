// 
// Resume.js
import React from "react";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Aishwarya_Bhandari_Resume.pdf";
    link.download = "Aishwarya_Bhandari_Resume.pdf";
    link.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Resume</h1>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Resume;