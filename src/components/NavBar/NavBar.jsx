import "./NavBar.css";

function NavBar() {
    return(
        <>
        <div className="navBar">
            <img src="./images/logo.png" alt="website-logo" className="logoContainer" height="45" />
            <nav className="navContainer">
                <a className="navItem active" href="index.html">Home</a>
                <a className="navItem" href="about.html">About</a>
                <a className="navItem" href="blog.html">Blog</a>
            </nav>
        </div>
        </>
    );
}

export default NavBar