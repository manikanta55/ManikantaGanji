import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/sganji.jpg";
import adminImg from "../images/Admin.png";
import CloudImg from "../images/Cloud.png";
import resumeFile from "../assets/Manikanta_s_Resume.pdf";
import { BsMoon, BsSun } from "react-icons/bs";
import "animate.css";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-section").forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-gradient" : "navbar-light bg-white"} px-4 shadow-lg`}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-primary ms-3 btn-sm d-flex align-items-center">
              {darkMode ? <BsSun className="me-2" /> : <BsMoon className="me-2" />} {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with animation */}
      <section className="text-center py-5 bg-gradient fade-section">
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
          Hello, I'm <span className="text-primary animate__animated animate__pulse animate__delay-1s animate__repeat-2">Manikanta Ganji</span>
        </h1>
        <p className="lead fst-italic animate__animated animate__fadeInUp animate__delay-2s">
          AI/ML Developer | Software Developer | Tech Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-secondary rounded-3 mx-3 fade-section">
        <h2 className="h2 text-center mb-4">About Me</h2>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start">
          <img src={profileImage} alt="Profile" className="shadow-lg me-md-4 mb-3 mb-md-0"
            style={{ borderRadius: '15px', width: '250px', height: '250px', objectFit: 'cover' }} />
          <div className="w-50">
            <p className="fs-5">
              I am a passionate software developer with expertise in AI/ML, React, and backend systems. I enjoy building scalable applications and working on innovative projects that solve real-world problems.
            </p>
            <button className="btn btn-outline-light btn-sm mt-2 me-2" onClick={() => setShowResume(true)}>View Resume</button>
            <a href={resumeFile} download className="btn btn-outline-light btn-sm mt-2">Download Resume</a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {showResume && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="bg-white rounded shadow-lg p-3" style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <div className="d-flex justify-content-end">
              <button className="btn btn-sm btn-danger" onClick={() => setShowResume(false)}>Close</button>
            </div>
            <iframe src={resumeFile} title="Resume" style={{ width: '100%', height: '80vh' }}></iframe>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className="text-center py-5 fade-section">
        <h2 className="h2 mb-5">Projects</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow border-light h-100 transition-all" style={{ borderRadius: '15px' }}>
              <img src={adminImg} className="card-img-top rounded-top" alt="Admin Dashboard UI"
                style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Admin Dashboard UI Clone</h5>
                <p className="card-text">Built a responsive dashboard using React, Tailwind CSS, and Recharts. Features include charts, route-based sidebar navigation, and editable user tables.</p>
                <div className="mb-2">
                  <span className="badge bg-primary me-1">React</span>
                  <span className="badge bg-info text-dark me-1">Tailwind CSS</span>
                  <span className="badge bg-success">Recharts</span>
                </div>
                <a href="https://stackblitz.com/edit/vitejs-vite-xau3eaa8" className="btn btn-outline-light btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow border-light h-100 transition-all" style={{ borderRadius: '15px' }}>
              <img src={CloudImg} className="card-img-top rounded-top" alt="SecureHealth Cloud"
                style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">SecureHealth Cloud</h5>
                <p className="card-text">A secure Database-as-a-Service platform with role-based access and encrypted storage using Flask and MySQL. HIPAA-compliant architecture.</p>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark me-1">Flask</span>
                  <span className="badge bg-secondary me-1">MySQL</span>
                  <span className="badge bg-info text-dark">Python</span>
                </div>
                <a href="https://github.com/manikanta55/SecureHealth-Cloud-A-Confidential-Database-as-a-Service-Solution" className="btn btn-outline-light btn-sm" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-5 bg-secondary rounded-3 mx-3 fade-section">
        <h2 className="h2 mb-4">Contact Me</h2>
        <p className="fs-5">Email: <a href="mailto:manikantaganjisde@gmail.com" className="text-white">manikantaganjisde@gmail.com</a></p>
        <p className="fs-5">Phone: <span className="text-light">+1 234-238-2709</span></p>
      </section>

      {/* Footer */}
      <footer className={`text-center py-3 ${darkMode ? "bg-gradient text-white" : "bg-light text-dark"} mt-4 shadow-lg`}>
        <p className="fs-6">Connect with me:
          <a className={`${darkMode ? "text-light" : "text-dark"} mx-2`} href="https://www.linkedin.com/in/manikanta-ganji-86240399/" target="_blank" rel="noreferrer">LinkedIn</a>|
          <a className={`${darkMode ? "text-light" : "text-dark"} mx-2`} href="https://github.com/manikanta55" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
