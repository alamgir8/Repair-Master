import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllService = () => {
    const [services, setServices] = useState([]);
    const [orders, setOrders] = useState([]);
    const [pending, setPending] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            
        })
        .catch(err => console.log(err))

    }, [])
    
    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
           
            const orderPending = data.filter(statusP => statusP.status === 'Pending')
            setPending(orderPending)

            const orderOngoing = data.filter(statusO => statusO.status === 'Ongoing')
            setOngoing(orderOngoing)

            const orderDone = data.filter(statusD => statusD.status === 'Done')
            setDone(orderDone)
           
           
            
                  
        })
        .catch(err => console.log(err))

    }, [])


    return (
            <div className='all-service-section'>
                <div className="row">
                    <div className="col-md-3 my-4">
                        <div className="card bg-danger text-white p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className='display-5'>{orders.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Total Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 my-4">
                        <div className="card bg-warning text-white p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className='display-5'>{pending.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Order Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="card bg-primary text-white p-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <h2 className='display-5'>{ongoing.length}</h2>
                                </div>
                                <div className="col-md-7 m-auto">
                                    <p className='h6'>Order Ongoing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="card bg-success text-white p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className='display-5'>{done.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Order Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="card p-4 my-3">
                        {services.length === 0 &&   <div className="text-center display-4">
                        <Spinner animation="grow" variant="warning" />
                    </div>}
                    <h5 className='py-3'>All Service</h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className='fst-italic'>Sr No</th>
                                    <th className='fst-italic'>Service Name</th>
                                    <th className='fst-italic'>Create Time</th>
                                    <th className='fst-italic'>Price</th>                           
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   services.map((service, index) =>

                                <tr key={service._id}>
                                    <td className='h6 text-muted'>{index + 1}</td>
                                    <td className='h6 text-muted'>{service.title}</td>
                                    <td className='h6 text-muted'>{service.createTime}</td>
                                    <td className='h6 text-muted'>${service.price}</td>        
                                </tr>
                                )
                               }                                 
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default AllService;