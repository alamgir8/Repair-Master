import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))

    }, [])
    
    return (
        <div className='services-section my-5'>
            <div className="container">
                <div className="service-header text-center py-5">
                    <h6>SELECT REPAIR SERVICE</h6>
                    <h2>Get your repair started</h2>
                </div>
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