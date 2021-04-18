import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))

    }, [])
    
    return (
        <div className='services-section my-5'>
            <div className="container">
                <div className="service-header text-center py-5">
                    <h6 className='sub-header'>SELECT <span className='text-dark'>REPAIR</span> SERVICE <span className='mx-2'><i className="bi bi-megaphone"></i></span></h6>
                    <h2>Get your repair started</h2>
                </div>
                {services.length === 0 &&   <div className="text-center display-4">
                        <Spinner animation="grow" variant="warning" />
                </div>}
                <div className="row">
                    {
                        services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;