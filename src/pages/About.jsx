/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"
import "../main.css";

function About() {
    return(
        <>
        <Helmet>
            <title>Portfolio | About</title>
            <link rel="icon" type="image/x-icon" href="./favicons/about.png" />
        </Helmet>
            <NavBar />
            <Footer />
            <img src="./images/avatar.png" alt="self-potrait" className="avatarContainer" />
            <div className="aboutContent">
                <h1>Hey there, I'm Haseeb Althaf!</h1>
                <p>Meet Haseeb, the 19-year-old coding maestro with a penchant for turning coffee into code faster than you can say "Java latte." Haseeb's journey into the wild world of software started back in 2009 when he realized that computers were more than just fancy paperweights.
                    As Haseeb grew, so did his love affair with all things tech. While his friends were out playing sports, Haseeb was busy dissecting computers, much to the confusion of his neighbors who were convinced he was building a robot army in his garage.
                    Then, in 2019, it happened. With a twinkle in his eye and a mug of coffee that could power a small city, Haseeb bravely typed out his first "print("Hello World")" in Python. It was a momentous occasion, like discovering fire but with fewer burned fingers.
                    From that moment on, Haseeb knew he was destined for greatness in the world of software development.
                    Now, armed with a degree pursuit in Computer Science at the Informatics Institute of Technology (where he's pretty sure the campus Wi-Fi owes its speed to his coding prowess), Haseeb excels in languages like HTML, CSS, JavaScript, ReactJS, Java, and Python. He's the kind of guy who dreams in code and occasionally wakes up in a panic because he forgot to close a curly brace.
                    But for Haseeb, software development isn't just a career choice, it's a calling. And if anyone dares to challenge him, he'll simply code up a program to automate their daily tasks until they beg for mercy. Because in Haseeb's world, even the coffee machines need to be optimized for maximum efficiency.</p>
                <p>Wanna learn more about me? You can find me in the social medias provided below!</p>
            </div>
            <div className="socialContainer">
            <a href="mailto:haseebalthaf1@outlook.com">
                <img className="socialIcon" alt="social-icon" src="./social-icons/email.png"/>
            </a>
            <a href="https://www.linkedin.com/in/haseeb-althaf-990243230/">
                <img className="socialIcon" alt="social-icon" src="./social-icons/linkedin.png"/>
            </a>
            <a href="https://github.com/haseebalthaf">
                <img className="socialIcon" alt="social-icon" src="./social-icons/github.png"/>
            </a>
            <a href="https://www.instagram.com/haseebalthaf/">
                <img className="socialIcon" alt="social-icon" src="./social-icons/instagram.png"/>
            </a>
            <a href="https://twitter.com/haseebalthaf1">
                <img className="socialIcon" alt="social-icon" src="./social-icons/twitter.png"/>
            </a>
            </div>
        </>
    );
}

export default About;