import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"
import "../main.css";

function Home() {
    return(
        <>
        <Helmet>
            <title>Portfolio | Home</title>
            <link rel="icon" type="image/x-icon" href="./favicons/home.png" />
        </Helmet>
            <NavBar />
            <Footer />
            <div className="homeContainer">
                <h1 className="homeTitle">Welcome to my Portfolio!</h1>
                <img src="./images/main.svg" alt="vector-image" className="homeImg" height="600" />
            </div>
        </>
    );
}

export default Home;