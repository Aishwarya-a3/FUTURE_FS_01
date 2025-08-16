// import React from 'react';

// const Footer = () => (
//   <footer className="footer">
//     <p>© {new Date().getFullYear()} Aishwarya Bhandari — Built with React & Node</p>
//     <p>
//       <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
//       {' · '}
//       <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//     </p>
//   </footer>
// );

// export default Footer;

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aishwarya Bhandari. All Rights Reserved.</p>
    </footer>
  );
}
