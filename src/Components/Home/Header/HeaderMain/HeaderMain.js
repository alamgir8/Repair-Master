import React from 'react';
import { Link } from 'react-router-dom';
import './../../Home.css'

const HeaderMain = () => {
    return (
        <div id='home' className='header-main-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='header-main'>
                            <h1 className='display-4 pb-3'>Broken smartphone? <br/>we can help.</h1>
                            <p className='h6'>Broken Smartphone, Pc, Laptop or Other electric items? Don't worry we Repair Master come here to help You to solve your problem</p>
                            <Link to='/'><button className='btn btn-schedule text-white bg-danger my-3'>GET SCHEDULE </button></Link> 
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