import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const OrderedServices = () => {
    const [orders, setOrders] = useState([])
    const [pending, setPending] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [done, setDone] = useState([]);
    const [filter, setFilter] = useState([])

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            if (orders.length === 0) {
                setOrders(data)
            }
            else{
                const newFilter = data.filter(statusF => statusF.status === filter);
                setOrders(newFilter)
                console.log(newFilter);
            }
        }
        )
        .catch(error => console.log(error))
    }, [filter])

    const handleFilter = () => {
        const filterStatus = document.getElementById('filter-status').value;
        setFilter(filterStatus)
        console.log(filterStatus);
        const orderPending = orders.filter(statusP => statusP.status === 'Pending')
        setPending(orderPending)

        const orderOngoing = orders.filter(statusO => statusO.status === 'Ongoing')
        setOngoing(orderOngoing)

        const orderDone = orders.filter(statusD => statusD.status === 'Done')
        setDone(orderDone)
    }

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
                    
                   
                        <div className="card p-2 my-3">
                        <div className="row my-3">
                            <div className="col-md-6">
                                <h5 className='p-3'>All Orders</h5>
                            </div>
                            <div className="col-md-6">
                            <label className='p-3 text-end h5'>Filter Status</label>
                                <select onChange={() => handleFilter()} name="status" id="filter-status">
                                    <option value="Pending">Pending</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className='fst-italic'>Customer</th>
                                    <th className='fst-italic'>Service</th>
                                    <th className='fst-italic'>Order Date</th>
                                    <th className='fst-italic'>Status</th>
                                    <th className='fst-italic text-center'>Action</th>                              
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   orders.map((order) =>

                                <tr key={order._id}>
                                    <td className='h6 '>
                                        <div>
                                            <span className='text-muted mx-1 info'>{order.name}</span>
                                        </div>
                                        <div>
                                             <span className='text-muted mx-1 info'>{order.email}</span>
                                        </div>
                                    </td>
                                    <td className='h6 title text-muted'>{order.service.title}</td>
                                    <td className='h6 time text-muted'>{order.orderTime}</td>
                                    <td className='h6 status text-muted' id='current-status'>{order.status}</td>
                                    <td>
                                    <span >
                                        <button onClick={() => (handlePending(order._id))} id='status-pending' className='btn  bg-pending btn-sm mx-1'><small>Pending</small></button>
                                        <button onClick={() => (handleOngoing(order._id))} id='status-ongoing' className='btn bg-ongoing btn-sm '><small>Ongoing</small></button>
                                        <button onClick={() => (handleDone(order._id))} id='status-done' className='btn bg-done text-dark btn-sm mx-1'><small>Done</small></button>
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