import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className='footer-section'>
        <footer className="text-lg-start">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h3 className="brand-name "><span className='brand-first'>Repair</span> <span className='brand-second'>Master</span></h3>

                    <ul className="list-unstyled my-4">
                    <li className='pt-1'>
                        <span className='h6'>Office: </span>
                        <a href="#!" className="text-white">North tower, 3rd Floor, Uttara-1230</a>
                    </li>
                    <li className='pt-1'>
                    <span className='h6'>Email: </span>
                        <a href="#!" className="text-white">ahossain38900@gmail.com</a>
                    </li>
                    <li className='pt-1'>
                    <span className='h6'>Phone: </span>
                        <a href="#!" className="text-white">01957930032</a>
                    </li>
                   
                    </ul>
                </div>
        

        
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="mt-2 sub-header">Services</h5>

                    <ul className="list-unstyled my-4 ">
                        
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Smartphone</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Tablet/iPad</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Mac & Pc</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Laptop</a>
                    </li>
                    
                    </ul>
                </div>
              
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="mt-2 sub-header">About Us</h5>

                    <ul className="list-unstyled my-4">
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Success Story</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Payment Policy</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Term & Conditions</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white">Privacy Policy</a>
                    </li>
                    </ul>
                </div>
              
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="mt-2 sub-header">Our Social Media</h5>

                    <ul className="list-unstyled my-4">
                    <li className='pt-1'>
                        <a href="#!" className="text-white"><span className='mx-1'><i className="bi bi-facebook"></i></span> Facebook</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white"><span className='mx-1'><i className="bi bi-twitter"></i></span> Twitter</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white"><span className='mx-1'><i className="bi bi-instagram"></i></span> Instagram</a>
                    </li>
                    <li className='pt-1'>
                        <a href="#!" className="text-white"><span className='mx-1'><i className="bi bi-youtube"></i></span> Youtube</a>
                    </li>
                    </ul>
                </div>
              
                </div>
             
            </div>
           

            <div className="text-center p-3" >
                © 2021 Copyright 
                <a className="text-white" href="#doctor"> Repair <span className='brand-second'>Master</span></a>
            </div>
           
            </footer>
        
    </div>
    );
};

export default Footer;