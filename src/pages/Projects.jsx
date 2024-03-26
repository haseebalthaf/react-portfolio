import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../main.css";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Projects</title>
        <link rel="icon" type="image/x-icon" href="./favicons/projects.png" />
      </Helmet>
      <NavBar />
      <Footer />
      <div className="projectContainer">
        <ul>
          <li>
            ALiyah e-Learning Platform
            <p>Assisted in creating an e-Learning Platform using MERN stack for Software Development Group Project module.</p>
          </li>
          <li>
            Real Estate Website
            <p>Created a website for real estate displaying properties using ReactJS, CSS and Bootstrap for Advanced Client Side module.</p>
          </li>
          <li>
            Westminster Shopping Manager
            <p>Created a command line based shopping manager using Java for Object Oriented Programming module.</p>
          </li>
          <li>
            Restaurant Billing System
            <p>Created a command line based billing system for a restaurant using Java for Software Development 2 module.</p>
          </li>
          <li>
            University Grading System
            <p>Created a command line based grading system for university using Python for Software Development 1 module.</p>
          </li>
          <li>
            Sports Club Website
            <p>Assisted in creating a Sports based information/shopping website using HTML, CSS and JavaScript.</p>
          </li>
          <li key="portfolio">
            Portfolio - A website about myself for Advanced Client Side
            <p>Created a portfolio website about myself using ReactJS and CSS.</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="formContainer">
        <form action="#" className="formContent">
          <p>Subscribe to my newsletter and stay updated!</p>
          <div className="formInput">
            <label htmlFor="email"></label>
            <input id="email" type="email" placeholder="Enter your email" />
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Projects;
