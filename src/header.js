
import React, {useState} from "react";
import './index.css';

function Header() {

    const [navBarOpen, setNavBarStatus] = useState(false)

    return (

        <div className="navbar navbar-light justify-content-end navbar-expand-lg">
            <button className={`navbar-toggler px-0 my-2 ${navBarOpen ? "custom-toggler" : ""}`} type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" onClick={() => setNavBarStatus(navBarOpen ? false : true)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mt-2 mt-lg-0 navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">projects </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">about me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}




export default Header;