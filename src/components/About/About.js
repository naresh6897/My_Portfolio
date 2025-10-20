import "./About.css";
import { animated, useSpring } from "react-spring";
import yourPhoto from '../../assets/naresh.jpg';

export default function About() {
  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div className="about">
      <animated.h1 style={props}>Get to Know Me</animated.h1>
      <div className="about-container">
        <div className="profile_image">
          <img src={yourPhoto} alt="Naresh Kumar Kasthuri" className="profile_imagee" />
        </div>

        <div className="text">
          <animated.p style={props}>
            Hello! I’m <b>Naresh Kumar Kasthuri</b>, an AI/ML and Full-Stack Developer based in Mississauga, ON. 
            I hold a <b>Master’s in Advanced Computer Science</b> from Cardiff Metropolitan University (UK) 
            and a <b>Diploma in Artificial Intelligence & Machine Learning</b> from Conestoga College (Canada). 
            My passion lies in creating intelligent, scalable solutions that combine AI, cloud computing, and 
            modern web technologies.
            <br /><br />
            With <b>2.8 years of experience at Tata Consultancy Services</b> as an Assistant System Engineer, 
            I built secure data pipelines on AWS and automated workflows that improved data accessibility and 
            business decision-making. My expertise spans <b>Python, React, FastAPI, SQL, GCP, AWS, and Docker</b> — 
            tools I’ve used to develop AI chatbots, data lakes, and full-stack applications.
            <br /><br />
            Beyond coding, I enjoy exploring how AI can solve everyday problems, mentoring peers, and learning 
            about new advancements in machine learning and data engineering. Let’s connect and build something 
            impactful together!
          </animated.p>
        </div>
      </div>
    </div>
  );
};
