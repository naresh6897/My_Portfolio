import { Link } from "react-scroll";
import React, { useContext } from "react";
<<<<<<< HEAD
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from "react-spring";
import { ThemeContext } from '../../App';
import "./Home.css";
import myImage from '../../assets/Naresh3.jpeg'; // <-- add this image to src/assets
=======
// ❌ remove: import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from "react-spring";
import { ThemeContext } from '../../App';
import "./Home.css";
import myImage from '../../assets/Naresh3.jpeg';
>>>>>>> b8bfec4 (Initial portfolio commit)

const loadFontAwesome = () => {
  const link = document.createElement("link");
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Home = () => {
  const resumeLink = () => {
<<<<<<< HEAD
    // TODO: replace with your real public resume URL
    window.open('https://drive.google.com/file/d/10_uE0Kn5ItOeGtE5UxOWZ-SeydGocz7t/view?usp=sharing', '_blank');
=======
    window.open(
      'https://drive.google.com/file/d/10_uE0Kn5ItOeGtE5UxOWZ-SeydGocz7t/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
>>>>>>> b8bfec4 (Initial portfolio commit)
  };

  React.useEffect(() => {
    loadFontAwesome();
  }, []);

  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <animated.h1 style={props} className="name">
            Naresh Kumar Kasthuri
          </animated.h1>

<<<<<<< HEAD
          <h2>
            <Typewriter
              words={[
                "AI/ML Developer",
                "Python Full-Stack Developer",
                "Data Engineer (GCP/AWS)",
                "Assistant System Engineer",
                "Academic Tutor (Self-Employed)"
              ]}
              loop={0}          // 0 = infinite loop
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
=======
          {/* ✅ constant title instead of typewriter */}
          <h2>AI/ML & Full-Stack Developer</h2>
>>>>>>> b8bfec4 (Initial portfolio commit)

          <p>
            I’m an AI/ML and Python full-stack developer based in Mississauga, ON (open to relocation).
            I’ve built a Gen-AI/RAG chatbot to boost student engagement, migrated enterprise data
            pipelines to BigQuery, and shipped cloud apps with React + FastAPI, Docker, and CI/CD
            across GCP and AWS. I love turning data into reliable products that unlock faster,
            smarter decisions.
            <br /><br />
            Explore my work and let’s connect!
          </p>

          <div className="button-container">
            <Link to="about" smooth={true} duration={500} className={`more-button ${theme}`}>
              Get to Know Me!
            </Link>
            <button onClick={resumeLink} className={`resume-button ${theme}`}>
              Download Resume
            </button>
          </div>

          <div className="icon-container">
            <a
              href="mailto:kasthurinareshkumar06@gmail.com"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
<<<<<<< HEAD
            {/* Removed LinkedIn and Blog per your request */}
            <a
              href="https://github.com/naresh6897"  // <-- update if your username differs
=======
            <a
              href="https://github.com/naresh6897"
>>>>>>> b8bfec4 (Initial portfolio commit)
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="round-image-container">
          <div className="round-image-border"></div>
          <img src={myImage} alt="Naresh Kumar Kasthuri" className="round_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
