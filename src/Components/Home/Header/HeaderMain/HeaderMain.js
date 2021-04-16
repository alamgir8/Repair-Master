import React from 'react';
import { Link } from 'react-router-dom';
import mobile from './../../../../img/bg (4).jpg'
import './../../Home.css'

const HeaderMain = () => {
    return (
        <div className='header-main-section'>
            <div className="container">
               <div className='header-main'>
                <div className="row">
                    <div className="col-md-6 offset-md-1 mt-5 pt-5">
                        <h1 className='display-4 pb-3'>Broken smartphone? <br/>we can help.</h1>
                        <p className='h6'>Broken Smartphone, Pc, Laptop or Other electric items? Don't worry we Repair <span className='brand-second'>Master</span> come here to help You to solve your problem</p>
                        <Link to='/'><button className='btn text-white bg-danger p-2 my-3'>GET SCHEDULE </button></Link> 
                    </div>
                    <div className="col-md-3 header-img ">
                        {/* <img src={mobile} alt="mobile" className='img-fluid'/> */}
                    </div>  
                </div> 
                </div>
               </div>
        </div>
    );
};

export default HeaderMain;