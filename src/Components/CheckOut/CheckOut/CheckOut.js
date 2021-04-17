import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import Payment from '../Payment/Payment';


const CheckOut = () => {
    const {_id} = useParams();
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            let result = data.find(element => element._id === _id);
            setService(result)

        })
    }, [_id])

    return (
        <div className='checkout-section'>
            <Navigation/>
               <div className="container">
                    <div className="row">
                        <div className='col-md-5'>
                            <h4 className='text-center py-3'>Your Selected Service</h4>
                            <div className="card p-4">
                                <div className='service-image text-center pb-3'>
                                    <img src={service.imageURL} alt="service" className='img-fluid'/>
                                </div>
                                <div className="service-title">
                                    <h3>{service.title}</h3>
                                    <p>{service.info}</p>
                                    <p className='text-center h5'> Service Cost<span className='text-danger'> ${service.price}</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                        <h4 className='text-center py-3'>Submit This Form for Add Service</h4>
                            <div className="card p-4">
                                <Payment service={service}/>
                            </div>
                        </div>
                    </div>
                </div> 
         </div>
    );
};

export default CheckOut;