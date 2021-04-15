import React from 'react';
import { Link } from 'react-router-dom';
import './../Shared.css'

const Navigation = () => {
    return (
        <div className="nav-section">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                                <li className="nav-item pt-2">            
                                    <Link to="/home" className="nav-link mx-3 h6 nav-header"> Home </Link>
                                </li>
                                <li className="nav-item pt-2">
                                    <a href="#about-us" className="nav-link mx-3 h6 nav-header">About Us</a>
                                </li>
                                <li className="nav-item dropdown pt-2">
                                    <a className="nav-link dropdown-toggle mx-3 h6 nav-header" href='#service'>
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="#smartphone">SmartPhone</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#smartphone">Tablet/iPad</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#pc">Mac & PC</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#laptop">Laptop</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item pt-2">
                                <Link to="/dashboard" className="nav-link mx-3 h6 nav-header"> Dashboard </Link>
                                </li>
                                <li className="nav-item pt-2">
                                    <a href="#contact" className="nav-link mx-3 h6 nav-header">Contact</a>
                                </li>
                                {/* <li className="nav-item pt-2">
                                    {loginUser.displayName ? <span className="nav-link active mx-3 h6 nav-header">{loginUser.displayName}</span> : <Link to="/login" className="nav-link active px-3 h6 nav-header">Login</Link>}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    </nav>
           

        </div>
    </div>
    );
};

export default Navigation;