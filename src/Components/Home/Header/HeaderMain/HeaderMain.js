import React from 'react';
import { Link } from 'react-router-dom';
import mobile from './../../../../img/bg (4).jpg'
import './../../Home.css'

const HeaderMain = () => {
    return (
        <div className='header-main-section'>
            <div className="container my-3">
               <div className='header-main'>
                <div className="row">
                    <div className="col-md-4 offset-md-1 my-3">
                        <h1 className='text-white'>Broken smartphone? <br/>we can help.</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita adipisci esse libero repellendus blanditiis.</p>
                        <Link to='/'><button className='btn button text-white p-2'>GET SCHEDULE </button></Link> 
                    </div>
                    {/* <div className="col-md-6 header-img my-5">
                        <img src={mobile} alt="mobile" className='img-fluid'/>
                    </div>   */}
                </div> 
                </div>
               </div>
        </div>
    );
};

export default HeaderMain;