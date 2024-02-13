import "./NavBar.css";

function NavBar() {
    return(
        <>
        <div className="navBar">
            <img src="./images/logo.png" alt="website-logo" className="logoContainer" height="45" />
            <nav className="navContainer">
                <a className="navItem active" href="/">Home</a>
                <a className="navItem" href="about">About</a>
                <a className="navItem" href="projects">Projects</a>
            </nav>
        </div>
        </>
    );
}

export default NavBar