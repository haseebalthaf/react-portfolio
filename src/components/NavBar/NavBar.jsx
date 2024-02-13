import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return(
        <>
        <div className="navBar">
            <img src="./images/logo.png" alt="website-logo" className="logoContainer" />
            <nav className="navContainer">
            <Link to="/" className={`navItem ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`navItem ${isActive('/about')}`}>About</Link>
        <Link to="/projects" className={`navItem ${isActive('/projects')}`}>Projects</Link>
            </nav>
        </div>
        </>
    );
}

export default NavBar