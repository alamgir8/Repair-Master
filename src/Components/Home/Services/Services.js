import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import spinner from './../../../img/spinner.gif'



const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getServices = async() => {
        const res = await fetch('https://repair-master-server.herokuapp.com/services')
        const data = await res.json()
            setServices(data);
            setLoading(false)
 
        }

        return getServices()

    }, [])
    
    return (
        <div id='services' className='services-section my-5'>
            <div className="container">
                <div className="service-header text-center py-5">
                    <h6 className='sub-header'>SELECT <span className='text-dark'>REPAIR</span> SERVICE <span className='mx-2'><i className="bi bi-megaphone"></i></span></h6>
                    <h2>Get your repair started</h2>
                </div>
                {loading &&   <div className="text-center display-4">
                    <img src={spinner} alt="spinner" />
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