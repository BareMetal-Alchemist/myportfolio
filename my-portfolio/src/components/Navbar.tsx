import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return(
        <nav className="navbar">
            <div className="container">
                <div className="logo">Noah Scott</div>
                <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}