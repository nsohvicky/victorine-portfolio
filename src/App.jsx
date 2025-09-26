import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//Navbar with links to 6 pages
function Navbar() {
  const link = { marginRight: 10 };
  return (
    <nav style={{ padding: 10, background: "#eee" }}>
      <strong style={{ marginRight: 15 }}>My Portfolio</strong>
      <Link to="/" style={link}>Home</Link>
      <Link to="/about" style={link}>About</Link>
      <Link to="/projects" style={link}>Projects</Link>
      <Link to="/education" style={link}>Education</Link>
      <Link to="/services" style={link}>Services</Link>
      <Link to="/contact" style={link}>Contact</Link>
    </nav>
  );
}

//pages
function Home() {
  return (
    <div style={{ padding: 20 }}>
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
//About page with headshot and resume link
function About() {
  return (
    <div style={{ padding: 20 }}>
      <h1>About Me</h1>
      <p>
        My name is <strong>Victorine Nsoh</strong>. I am a student at Centennial College.
        I enjoy building clean, simple web apps and learning new tools.
      </p>

    
      <img src="/headshoot.jpg" alt="My headshot" width="150" style={{ display: "block", marginTop: 10 }} />

     
      <p style={{ marginTop: 10 }}>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Download My Resume (PDF)</a>
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Projects</h1>

      <h3>Project 1</h3>
      {/* Put "p1.jpg" in public folder */}
      <img src="/project1.png" alt="Project 1 screenshot" width="260" />
      <p>I enhanced a simple reflex agent (BlindDog) by adding extra food, creating a new Person class, and enabling the dog to bark when encountering people.
         The outcome was a more interactive simulation that demonstrated expanded agent behaviors.</p>

      <h3>Project 2</h3>
      {/* Put "p2.jpg" in public folder */}
      <img src="/project2.png" alt="Project 2 screenshot" width="260" />
      <p>For Project 2, I developed a Bash script that displays student details and script information from command-line inputs. 
        My role was to write and test the script, and the outcome was a working program that outputs names, student ID, script name, and total arguments.</p>

      <h3>Project 3</h3>
      {/* Put "p3.jpg" in public folder */}
      <img src="/project3.png" alt="Project 3 screenshot" width="260" />
      <p>Built C# applications to model atoms and complex numbers, adding XML/JSON serialization and operator overloading. 
        Outcome: demonstrated strong skills in object-oriented programming, data handling, and mathematical operations.</p>
    </div>
  );
}

function Education() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Education</h1>
      <ul>
        <li>Centennial College — Software Engineering Technology (AI) — 2024–Present</li>
        {/* Add more: School — Program — Years */}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div style={{ padding: 20 }}>
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
//Contact form captures input and redirects to Home
function Contact() {
  const [f, setF] = useState({
    firstName: "", lastName: "", contactNumber: "", email: "", subject: "", message: ""
  });

  function onChange(e) {
    setF({ ...f, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Contact form data:", f); 
    window.location.href = "/";          
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Me</h1>

      
      <p>Email: venjowen@my.centennialcollege.ca | Phone: (555) 123-4567 | Ottawa, ON</p>

     
      <form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
        <input
          name="firstName"
          placeholder="First Name"
          value={f.firstName}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={f.lastName}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
          required
        />
        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={f.contactNumber}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={f.email}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          value={f.subject}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={f.message}
          onChange={onChange}
          style={{ width: "100%", padding: 8, marginTop: 10 }}
        />
        <button type="submit" style={{ marginTop: 12, padding: "8px 16px" }}>Send</button>
      </form>
    </div>
  );
}

// App with Routes 
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
      <footer style={{ padding: 10, textAlign: "center", marginTop: 30 }}>
        © {new Date().getFullYear()} Victorine Nsoh
      </footer>
    </div>
  );
}
