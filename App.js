// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
// // import React from 'react';
// // import Header from './components/Header';
// // import Home from './components/Home';
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';

// // function App() {
// //   return (
// //     <>
// //       <Header />
// //       <main className="container">
// //         <Home />
// //         <About />
// //         <Projects />
// //         <Contact />
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default App;

// // // import React from "react";
// // // import "./App.css";
// // // import Header from "./components/Header";
// // // import About from "./components/About";
// // // import Projects from "./components/Projects";
// // // import Contact from "./components/Contact";
// // // import Footer from "./components/Footer";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Header />
// // //       <About />
// // //       <Projects />
// // //       <Contact />
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default App;


import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills"
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import SEO from "./components/Helmet";
import Resume from "./components/Resume";
// import ResumeDownload  from "./components/ResumeDownload";
import Contact from "./components/Contact";
import "./App.css"; 
function App() {
  return (
    <div>
      <Header/>
      {/* <section id="home" style={{ padding: "50px", textAlign: "center" }}>
        <h1>Welcome to My Portfolio</h1> */}
        <Home/>
      {/* </section> */}
      <About/>
      <Projects/>
      <Contact/>
      <Resume/>
      {/* <ResumeDownload/> */}
     {/* <Skills/> */}
      {/* <Testimonials/> */}
      <SEO/>
    </div>
  );
}

export default App;

