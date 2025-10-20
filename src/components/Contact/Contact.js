import React from 'react';
import './Contact.css';

const Contact = () => {
  const resumeLink = () => {
    window.open('https://drive.google.com/file/d/10_uE0Kn5ItOeGtE5UxOWZ-SeydGocz7t/view?usp=drive_link', '_blank');
  };
  return (
    <div className="contact-container">
      <h1 className="contact-title">Hire Me!</h1>
      <div className="contact-content">

        <div className="button-container">
          <button onClick={resumeLink} className="download-button">Download Resume</button>
        </div>

        <div className="icon-container">
          <a href="mailto:kasthurinareshkumar06@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/naresh6897/My_Portfolio" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="citation">
        <p>&copy; Naresh Kumar Kasthuri!</p>
      </div>
    </div>
  );
};

export default Contact;
