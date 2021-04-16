import React from 'react';
import './../../Home.css'

const BusinessInfo = () => {
    return (
        <div className='business-info-section'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-7 my-5">
                        <h5 className='text-primary py-3'><span className='brand-first'>Repair</span> <span className='brand-second'>Master</span></h5>
                        <h3 className='py-2 h2'>Expert Repairs Done Fast</h3>
                        <p className='py-2'>Fast, Affordable Tablet, Laptop, Game Console and Cell Phone Repair. Your gadgets play a major role in your professional, personal and school life. When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in. With over a decade of experience in the electronics repair industry, <span className='brand-first'>Repair</span> <span className='brand-second'>Master</span> can get the job done quickly and effectively.</p>
                        <button className='btn button text-white p-2'>WHO WE ARE</button>
                    </div>
                    <div className="col-md-5 business-info card news p-4 text-dark my-5">
                        <h6 className='py-2 sub-header'>WHY CHOOSE US ?</h6>
                        <h2 className='py-2 h2'>Trusted source for smartphone repair</h2>
                        <p>
                            <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                             FREE DIAGNOSTIC
                        </p>
                        <p>
                            <span className='mx-2 h4' ><i className="bi bi-check2-circle"></i></span>
                            WE OFFER THE BEST PRICES
                        </p>
                        <p> 
                            <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                            QUICK/CONVENIENT REPAIR PROCESS
                        </p>
                        <p> 
                            <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                            180-DAY WARRANTY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;