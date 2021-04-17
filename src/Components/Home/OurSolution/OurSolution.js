import React from 'react';
import fixPhone from './../../../img/fix.jpg';



const OurSolution = () => {
    return (
        <div className='our-solution-section py-5'>
            <div className="container">
                <div className="our-solution py-3 px-2">
                    <div className="row">
                        <div className="col-md-5 py-3">
                            <h6 className='py-2 sub-header'>OUR SOLUTION</h6>
                            <h1 className='py-2'>We fix everything</h1>
                            <p>We can assure you that we have seen it all! From smartphones that have been run over by a car, to tablets that have taken a dive in a pool, we are prepared to face anything that comes our way.</p>
                            <p>Every <span>Repair</span> <span className='brand-second'>Master</span> technician goes through an intensive training process, and we maintain an environment of constant learning, so no device is too new, no technology too complicated.</p>
                            <button className='button-white px-4 py-2 my-3 text-dark'>KNOW MORE</button>
                        </div>
                        {/* <div className="col-md-6 offset-md-1 fixing-image text-center m-auto">
                            <img src={fixPhone} alt="fixing phone" className='img-fluid'/>
                        </div> */}
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default OurSolution;