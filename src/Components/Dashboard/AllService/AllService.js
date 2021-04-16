import React, { useEffect, useState } from 'react';

const AllService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error))
    })
    return (
        <div className='all-service-section'>
            <div className="container">
                
            </div>
        </div>
    );
};

export default AllService;