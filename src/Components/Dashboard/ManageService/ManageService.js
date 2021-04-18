import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ManageServiceDetails from './ManageServiceDetails';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error))
    })

    return (
        <div className='manage-service-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9 my-5">
                    {services.length === 0 &&   <div className="text-center display-4">
                        <Spinner animation="grow" variant="warning" />
                    </div>}
                        <div className="row">
                        {
                            services.map(service => <ManageServiceDetails service={service} key={service._id}></ManageServiceDetails>)
                        }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ManageService;