// // Home.js
// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <section className="home">
//       <div className="home-content">
//         <h1>Hello, I'm <span className="highlight">Aishwarya Bhandari</span></h1>
//         <p>I’m a Full Stack Developer passionate about building beautiful and functional websites.</p>
//         <a href="#projects" className="home-btn">View My Work</a>
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from "react";
import "./Home.css";
// import profilePic from "./profile.jpg"; // 📷 Replace with your photo path

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src="photo.jpg" alt="Aishwarya Bhandari" className="profile-pic" />
        <h1>Hi, I'm <span className="name-highlight">Aishwarya Bhandari</span></h1>
        <p>Final-year CSE student | Passionate about AI, Image Processing & Web Development</p>
      </div>
    </section>
  );
}

export default Home;
