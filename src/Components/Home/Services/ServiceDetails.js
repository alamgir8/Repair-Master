import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const {_id, name, info, imageURL} = props.service;
    return (
            <div className='col-md-4'>
                <div className="card card-transform p-4">
                    <div className='service-image text-center pb-3'>
                        <img src={imageURL} alt="service" className='img-fluid'/>
                    </div>
                    <div className="service-title">
                        <h2 className='py-2'>{name}</h2>
                        <p>{info}</p>
                    </div>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn button text-primary w-100'>SELECT SERVICE</button>
                    </Link>
                </div>
            </div>
    );
};

export default ServiceDetails;