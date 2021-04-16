import React from 'react';

const BusinessCard = () => {
    return (
        <div className='business-card-section my-5'>
            <div className="container">
            <div className="service-header text-center py-5">
                    <h6 className='sub-header'>REPAIRING SO FAST <span className='mx-2'><i className="bi bi-speedometer"></i></span></h6>
                    <h2 className=''>How it works</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 bg-light my-3">
                            <div className="row">
                                <div className="col-md-2 offset-md-1 m-auto">
                                    <span className='h1 text-primary'><i className="bi bi-tablet"></i></span>
                                </div>
                                <div className="col-md-9">
                                    <h5>Select Brand</h5>
                                    <p>Select your device brand needs repair.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 bg-light my-3">
                            <div className="row">
                                <div className="col-md-2 offset-md-1 m-auto">
                                    <span className='h1 text-success'><i className="bi bi-geo-alt"></i></span>
                                </div>
                                <div className="col-md-9">
                                    <h5 className='sub-header'>Location</h5>
                                    <p>Select a convenient location for the repair.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 bg-light my-3">
                            <div className="row">
                                <div className="col-md-2 offset-md-1 m-auto">
                                    <span className='h1 text-danger'><i className="bi bi-wrench"></i></span>
                                </div>
                                <div className="col-md-9">
                                    <h5>Repair</h5>
                                    <p>Repair professionals get in touch with you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default BusinessCard;