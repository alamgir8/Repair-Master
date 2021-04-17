import React, { useEffect, useState } from 'react';
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

    const handleChange = (id) => {
        const status = document.getElementById('position').value;
       
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Service Updated Successfully !')
        })
        .catch(error => console.log(error))

    }

    return (
        <div className='orders-section'>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                    <h5 className='py-5 sub-header'>Orders</h5>
                        <div className="card p-2">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className='text-secondary text-center'>Name</th>
                                    <th className='text-secondary text-center'>Email</th>
                                    <th className='text-secondary text-center'>Service</th>
                                    <th className='text-secondary text-center'>Order Date</th>
                                    <th className='text-secondary text-center'>Cost</th>
                                    <th className='text-secondary text-center'>Status</th>                              
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   orders.map((order) =>

                                <tr key={order._id}>
                                    <td className='h6 text-center'>{order.name}</td>
                                    <td className='h6'>{order.email}</td>
                                    <td className='h6 text-center'>{order.service.title}</td>
                                    <td className='h6 text-center'>{order.orderTime}</td>
                                    <td className='h6 text-center' id='servicePrice'>{order.service.price}</td>
                                    <select onChange={() => handleChange(order._id)} name="status" id="position">
                                        <option value="Pending" className='text-danger'>{order.status}</option>
                                        <option value="Ongoing" className='text-warning'>Ongoing</option>
                                        <option value="Done" className='text-success'>Done</option>
                                    </select>
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