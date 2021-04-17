import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/order?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data);
            
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
                        <h4 className='my-3'>My Ordered Service</h4>
                        <div className="row">
                            {
                                orders.map(order => <OrderDetails order={order} key={order._id}></OrderDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;


