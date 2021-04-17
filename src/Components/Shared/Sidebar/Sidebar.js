import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-section'>
            <div className="container">
                <nav className="nav flex-column pt-5">
                    <Link to="/dashboard" className="nav-link text-white"> 
                        <span className='mx-2 '>
                            <i className="bi bi-grid-3x3-gap"></i>
                        </span> Dashboard 
                    </Link>
                    <Link to="/dashboard/orders" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-card-checklist"></i>
                        </span> All Order
                    </Link>
                    <Link to="/dashboard/addAdmin" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-person-plus"></i>
                        </span> Add Admin 
                    </Link>
                    <Link to="/dashboard/addService" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-plus-square"></i>
                        </span> Add Service 
                    </Link>
                    <Link to="/dashboard/manageService" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-grid"></i>
                        </span> Manage Service 
                    </Link>
                    <Link to="/dashboard/myService" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-file-earmark-text"></i>
                        </span> My Service 
                    </Link>
                    <Link to="/dashboard/addReview" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-star"></i>
                        </span> Add Review 
                    </Link>
                   
                   
                    <Link to="/setting" className="nav-link text-white"> 
                        <span className='mx-2'>
                            <i className="bi bi-gear"></i>
                        </span> Setting 
                    </Link>
                    <Link to="/home" className="nav-link text-white text-bottom"> 
                        <span className='mx-2'>
                            <i className="bi bi-box-arrow-in-right"></i>
                        </span> Lock Out 
                    </Link>
                </nav>
            </div>
            
        </div>
    );
};

export default Sidebar;