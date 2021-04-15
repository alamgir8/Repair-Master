import React from 'react';

const ServiceDetails = (props) => {
    const {name, info, imageURL} = props.service;
    return (
            <div className='col-md-4'>
                <div className="card p-4">
                    <div className='service-image text-center pb-3'>
                        <img src={imageURL} alt="service" className='img-fluid'/>
                    </div>
                    <div className="service-title">
                        <h2>{name}</h2>
                        <p>{info}</p>
                    </div>
                    <button className='btn button'>SELECT SERVICE</button>
                </div>
            </div>
    );
};

export default ServiceDetails;