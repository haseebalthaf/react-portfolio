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
          <li key="portfolio">
            Portfolio - A website about myself for Advanced Client Side<br />
            <time dateTime="2023-11-14">14th November 2023</time>
          </li>
          <li key="groupProject">
            Software Development Group Project - (TBD)
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
