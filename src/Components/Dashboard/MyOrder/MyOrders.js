import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { userContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://repair-master-server.herokuapp.com/order?email=`+loggedInUser.email)
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
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar/>
                    </div>
                    <div className="col-md-9">
                        <h4 className='my-4'>My Ordered Service</h4>
                        <div className="row">
                            {orders.length === 0 &&   <div className="text-center display-4">
                            <Spinner animation="grow" variant="warning" />
                        </div>}
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


