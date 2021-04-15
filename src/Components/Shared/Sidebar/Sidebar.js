import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-section'>
            <div className="container">
                <nav className="nav flex-column pt-5">
                    <Link to="/dashboard" className="nav-link text-white"> <span className='mx-2 '><i className="bi bi-grid-3x3-gap"></i></span> Dashboard </Link>
                    <Link to="/dashboard/addService" className="nav-link text-white"> <span className='mx-2'><i className="bi bi-calendar"></i></span> Add Service </Link>
                    <Link to="/dashboard/addReview" className="nav-link text-white"> <span className='mx-2'><i className="bi bi-people"></i></span> Add Review </Link>
                    <Link to="/dashboard/prescription" className="nav-link text-white"> <span className='mx-2'><i className="bi bi-file-earmark-text"></i></span> Prescription </Link>
                    <Link to="/dashboard/addDoctor" className="nav-link text-white"> <span className='mx-2'><i className="bi bi-person-plus"></i></span> Add Doctor </Link>
                    <Link to="/setting" className="nav-link text-white"> <span className='mx-2'><i className="bi bi-gear"></i></span> Setting </Link>
                    <Link to="/home" className="nav-link text-white text-bottom"> <span className='mx-2'><i className="bi bi-box-arrow-in-right"></i></span> Lock Out </Link>
                </nav>
            </div>
            
        </div>
    );
};

export default Sidebar;