import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const OrderedServices = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data)
           
        )
        .catch(error => console.log(error))
    }, [])

    const handlePending = (id) => {
        const statusP = document.getElementById('status-pending').innerText;
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusP})
        })
        .then(res => res.json())
        .then(data => {
            alert('Service Updated Successfully !')
        })
        .catch(error => console.log(error))
        console.log(statusP);
    }


    const handleOngoing = (id) => {
        const statusG = document.getElementById('status-ongoing').innerText;
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusG})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Service Updated Successfully !')
        })
        .catch(error => console.log(error))
        console.log(statusG);
    }


    const handleDone= (id) => {
        const statusD = document.getElementById('status-done').innerText;
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusD})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Service Updated Successfully !')
        })
        .catch(error => console.log(error))
        console.log(statusD);
    }
    

    return (
        <div className='orders-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                    {orders.length === 0 &&   <div className="text-center display-4">
                        <Spinner animation="grow" variant="warning" />
                    </div>}
                    <h5 className='py-5 sub-header'>Orders</h5>
                   
                        <div className="card p-2">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className=''>Customer</th>
                                    <th className=''>Service</th>
                                    <th className=''>Order Date</th>
                                    <th className=''>Status</th>
                                    <th className='text-center'>Action</th>                              
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   orders.map((order) =>

                                <tr key={order._id}>
                                    <td className='h6'>
                                        <div>
                                            <span className='text-muted mx-1'>{order.name}</span>
                                        </div>
                                        <div>
                                             <span className='text-muted mx-1'>{order.email}</span>
                                        </div>
                                    </td>
                                    <td className='h6 text-muted'>{order.service.title}</td>
                                    <td className='h6 text-muted'>{order.orderTime}</td>
                                    <td className='h6 text-muted' id='current-status'>{order.status}</td>
                                    <td>
                                    <span >
                                        <button onClick={() => (handlePending(order._id))} id='status-pending' className='btn alert-primary btn-sm mx-1'><small>Pending</small></button>
                                        <button onClick={() => (handleOngoing(order._id))} id='status-ongoing' className='btn alert-warning btn-sm '><small>Ongoing</small></button>
                                        <button onClick={() => (handleDone(order._id))} id='status-done' className='btn alert-success text-dark btn-sm mx-1'><small>Done</small></button>
                                    </span>
                                    </td>   
                                </tr>
                                )
                               } 
                                                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OrderedServices;