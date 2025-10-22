import React from 'react';
import EachProject from './EachProject';
import './Projects.css';

const projectsData = [
  {
    title: 'FinBuddy – Smart Financial Assistant',
    description:
      'Designed and developed a full-stack AI-powered financial assistant that analyzes spending patterns, detects unusual transactions, forecasts finances, and simulates loan repayments. Built with React (Next.js), FastAPI, MongoDB, and integrated Azure Blob Storage, Firebase, and Docker for deployment. Integrated AI/ML models using Facebook Prophet and scikit-learn for forecasting and anomaly detection.',
    techStack: ['Next.js', 'FastAPI', 'MongoDB', 'Azure', 'Firebase', 'Prophet', 'scikit-learn', 'Docker'],
    githubLink: ''
  },
  {
    title: 'My Weather App Using React',
    description: 'Developed a web application using ReactJS that retrieves the current weather data for the users current location or any location they search for, as well as the five-day weather forecast, including the locations minimum and maximum temperatures, humidity, and sky conditions (cloudy, clear, rainy, fog, and mist). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://github.com/naresh6897/weather'
  },
  {
    title: 'My Portfolio Using React',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and achievements. Built using ReactJS, Tailwind CSS, and hosted on GitHub Pages with a CI/CD pipeline for automated deployments. Integrated dark mode, responsive design, and interactive UI elements for an enhanced user experience.). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
<<<<<<< HEAD
    githubLink: 'https://github.com/naresh6897/Portfolio.git'
=======
    githubLink: 'https://github.com/naresh6897/My_Portfolio'
>>>>>>> b8bfec4 (Initial portfolio commit)
  },
  {
    title: 'Smart Plant Recognition',
    description: 'Developed an app which detects the name of the plant, scientific name, along with the description of the plant from a photograph that student uploads. Used Angular framework (TypeScript/JS) and Django framework (Python) with HTML & CSS for Front End.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Angular', 'NodeJS'],
    githubLink: 'https://github.com/naresh6897/Pheonix'
  },
  {
    title: 'Smart Waste Sorting: A Comparative Analysis of ML Algorithms',
    description: 'A Machine Learning project where waste is classified as organic or recyclable. Algorithms such as Logistic Regression, Decision Tree, K Nearest Neighbors (KNN), Naive Bayes, Random Forest, XGBoost, and Convolutional Neural Networks (CNN) are used to know which model performs better. As a result, XGBoost and CNN models outperform other algorithm models.',
    techStack: ['Logistic Regression', 'CNN Algorithm', 'KNN', ],
    githubLink: ''
  },
  {
    title: 'Railway Reservation Management System',
    description:
      'Developed a Python + MySQL project to display train availability, seat status, and pricing based on user-selected travel details. Designed for future integration with full booking and payment capabilities.',
    techStack: ['Python', 'MySQL', 'HTML5', 'CSS3'],
    githubLink: ''
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <EachProject
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
