import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Navbar with links to 6 pages 
function Navbar() {
  const linkStyle = { marginRight: 12, color: "white", textDecoration: "none", fontWeight: 600 };
  return (
    <nav>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <strong style={{ color: "white", marginRight: 16 }}>Victorine’s Portfolio</strong>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/education" style={linkStyle}>Education</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

// Home
function Home() {
  return (
    <div className="page">
      <h1>Welcome to Victorine's Portfolio</h1>
      <p>This site shows my work, education, and how to contact me.</p>
      <p>
        <Link to="/about">About Me</Link> | <Link to="/projects">Projects</Link>
      </p>
      <h3>Mission</h3>
      <p>Build useful, simple software and keep learning every day.</p>
    </div>
  );
}

//About page shows headshot + resume link
function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        My name is <strong>Victorine Nsoh Enjowe</strong>. I am a student at Centennial College.
        I enjoy building clean, simple web apps and learning new tools.
      </p>

      
      <img src="/headshot.jpg" alt="My headshot" width="180" style={{ marginTop: 12 }} />

      
        <a href="/Resume.pdf" target="_blank" rel="noreferrer">Download My Resume (PDF)</a>
      
    </div>
  );
}

// Projects 
function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="projects">
        <div className="project-card">
          <h3>Project 1 – Portfolio Site</h3>
          
          <img src="/project1.png" alt="Project 1 screenshot" width="100%" />
          <p><strong>Role:</strong> Front-end • <strong>Outcome:</strong> Deployed on Netlify.</p>
        </div>

        <div className="project-card">
          <h3>Project 2 – Event App</h3>
          
          <img src="/project2.png" alt="Project 2 screenshot" width="100%" />
          <p><strong>Role:</strong> React dev • <strong>Outcome:</strong> Create & manage events.</p>
        </div>

        <div className="project-card">
          <h3>Project 3 – Data Dashboard</h3>
          
          <img src="/project3.png" alt="Project 3 screenshot" width="100%" />
          <p><strong>Role:</strong> Data viz • <strong>Outcome:</strong> Summaries & charts.</p>
        </div>
      </div>
    </div>
  );
}

//Education 
function Education() {
  return (
    <div className="page">
      <h1>Education</h1>
      <ul>
        <li>Centennial College — Software Engineering Technology (AI) — 2024–Present</li>
        
      </ul>
    </div>
  );
}

// Services 
function Services() {
  return (
    <div className="page">
      <h1>Services</h1>
      <ul>
        <li>Web Development</li>
        <li>Mobile Apps</li>
        <li>General Programming</li>
      </ul>
      <p>Contact me for small student-friendly projects.</p>
    </div>
  );
}

//Contact form captures input and redirects to Home page
{
  const [f, setF] = useState({
    firstName: "", lastName: "", contactNumber: "", email: "", subject: "", message: ""
  });

  function onChange(e) { setF({ ...f, [e.target.name]: e.target.value }); }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Contact form data:", f); 
    window.location.href = "/";           
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>

      
      <p>Email: your.email@school.ca • Phone: (###) ###-#### • Ottawa, ON</p>

      
      <form onSubmit={onSubmit} style={{ maxWidth: 520 }}>
        <div className="form-row form-row--2">
          <input name="firstName" placeholder="First Name" value={f.firstName} onChange={onChange} required />
          <input name="lastName" placeholder="Last Name" value={f.lastName} onChange={onChange} required />
        </div>
        <input name="contactNumber" placeholder="Contact Number" value={f.contactNumber} onChange={onChange} />
        <div className="form-row form-row--2">
          <input type="email" name="email" placeholder="Email" value={f.email} onChange={onChange} required />
          <input name="subject" placeholder="Subject" value={f.subject} onChange={onChange} />
        </div>
        <textarea rows="4" name="message" placeholder="Message" value={f.message} onChange={onChange} />
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
      </form>
    </div>
  );

}
// App with Routes + footer
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>© {new Date().getFullYear()} Victorine Nsoh Enjowe</footer>
    </div>
  );
}
