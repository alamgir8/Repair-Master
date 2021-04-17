import React, { useEffect, useState } from 'react';

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
            <div>
                <div className="row">
                    <div className="col-md-3 my-4">
                        <div className="card bg-danger text-white p-3">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <h2 className='display-5'>{orders.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Total Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="card bg-primary text-white p-3">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <h2 className='display-5'>{ongoing.length}</h2>
                                </div>
                                <div className="col-md-7 m-auto">
                                    <p className='h6'>Order Ongoing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="card bg-warning text-white p-3">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <h2 className='display-5'>{pending.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Order Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="card bg-success text-white p-3">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <h2 className='display-5'>{done.length}</h2>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <p className='h6'> Order Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="card p-3 my-3">
                    <h5 className='sub-header p-3'>All Service</h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className='text-secondary text-center'>Sr No</th>
                                    <th className='text-secondary text-center'>Service Name</th>
                                    <th className='text-secondary text-center'>Create Time</th>
                                    <th className='text-secondary text-center'>Price</th>                           
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   services.map((service, index) =>

                                <tr key={service._id}>
                                    <td className='h6 text-center'>{index + 1}</td>
                                    <td className='h6 text-center'>{service.title}</td>
                                    <td className='h6 text-center'>{service.createTime}</td>
                                    <td className='h6 text-center'>{service.price}</td>        
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