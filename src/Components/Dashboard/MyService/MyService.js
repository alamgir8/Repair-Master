import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';

const MyService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/order?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            
        })
        .catch(error => console.log(error))

    }, [loggedInUser.email])

    return (
        <div className='my-service-section'>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar/>
                    </div>
                    <div className="col-md-9">
                        <h2>My Ordered Service</h2>
                        <div className="card p-2">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-secondary text-center">Service Name</th>
                                        <th className="text-secondary text-center">Order Time</th>
                                        <th className="text-secondary text-center">Service Cost</th>
                                        <th className="text-secondary text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => 
                                    
                                        <tr key={order._id}>
                                            <td className='h6 text-center'>{order.service.title}</td>
                                            <td className='h6 text-center'>{order.orderTime}</td>
                                            <td className='h6 text-center'>{order.service.price}</td>
                                            <td className='h6 text-center'>{order.status}</td>
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

export default MyService;