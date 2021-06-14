import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ContentLoader from 'react-content-loader';
import swal from 'sweetalert';
import { useRef } from 'react';

const OrderedServices = () => {
    const [orders, setOrders] = useState([])
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const filterRef = useRef();
    const doneRef = useRef();
    const pendingRef = useRef();
    const ongoingRef = useRef();

    useEffect(() => {
        const getOrders = async() => {
        const res = await fetch('https://repair-master-server.herokuapp.com/orders')
        const data = await res.json()
            if (orders.length === 0) {
                setOrders(data)
                setLoading(false)
            }
            else{
                const newFilter = data.filter(statusF => statusF.status === filter);
                setOrders(newFilter)
               
            }
        }
        return getOrders()
               
    }, [filter])

    const handleFilter = () => {
        setFilter(filterRef.current.value);
        
    }


    const handleDone = (id) => {
        const statusD =  doneRef.current.value;
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusD})
        })
        .then(res => res.json())
        .then(data => {
           
            swal({
                title: "Status Change Successfully!",
                icon: "success",
              });
            
        })
    };

    const handlePending = (id) => {
        const statusP =  pendingRef.current.value;    
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusP})
        })
        .then(res => res.json())
        .then(data => {
            swal({
                title: "Status Change Successfully!",
                icon: "success",
              });
        })
    };

    const handleOngoing = (id) => {
        const statusG =  ongoingRef.current.value;   
        fetch(`https://repair-master-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({status: statusG})
        })
        .then(res => res.json())
        .then(data => { 
            swal({
                title: "Status Change Successfully!",
                icon: "success",
              });
        })
    };

    

    return (
        <div className='orders-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                    {loading ?  
                    <div className="text-center display-4">
                    <ContentLoader
                            width={1000}
                            height={550}
                            viewBox="0 0 1000 550"
                            backgroundColor="#ababab"
                            foregroundColor="#fafafa"
                            // {...props}
                        >
                            <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
                            <circle cx="879" cy="123" r="11" />
                            <circle cx="914" cy="123" r="11" />
                            <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
                            <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
                            <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
                            <circle cx="880" cy="184" r="11" />
                            <circle cx="915" cy="184" r="11" />
                            <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
                            <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
                            <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
                            <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="242" r="11" />
                            <circle cx="916" cy="242" r="11" />
                            <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="303" r="11" />
                            <circle cx="917" cy="303" r="11" />
                            <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
                            <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="363" r="11" />
                            <circle cx="916" cy="363" r="11" />
                            <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="424" r="11" />
                            <circle cx="917" cy="424" r="11" />
                            <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
                            <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
                            <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
                            <circle cx="882" cy="484" r="11" />
                            <circle cx="917" cy="484" r="11" />
                            <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
                            <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
                            <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
                            <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
                            <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
                            <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
                            <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
                        </ContentLoader>
                    </div>:
                        <div className="card p-2 my-3">
                        <div className="row my-3">
                            <div className="col-md-6">
                                <h5 className='p-3'>All Orders</h5>
                            </div>
                            <div className="col-md-6">
                            <label className='p-3 text-end h5'>Filter Status</label>
                                <select onChange={handleFilter} ref={filterRef} name="status">
                                    <option value="Pending">Pending</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                            <div className="table-responsive">
                            <table className="table table-borderless table-hover">
                            <thead className='bg-light'>
                                <tr>
                                    <th className='fw-bolder'>Customer</th>
                                    <th className='fw-bolder'>Service</th>
                                    <th className='fw-bolder'>Order Date</th>
                                    <th className='fw-bolder'>Status</th>
                                    <th className='fw-bolder text-center'>Action</th>                              
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
                                        <button value="Pending" onClick={() => (handlePending(order._id))} ref={pendingRef} className='btn  bg-warning text-white btn-sm m-1'><small>Pending</small></button>
                                        <button value="Ongoing" onClick={() => (handleOngoing(order._id))} ref={ongoingRef} className='btn bg-info text-white btn-sm m-1'><small>Ongoing</small></button>
                                        <button value="Done" onClick={() => (handleDone(order._id))} ref={doneRef} className='btn bg-success text-white btn-sm m-1'><small>Done</small></button>
                                    </span>
                                    </td>   
                                </tr>
                                )
                               } 
                                                            
                                </tbody>
                            </table>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OrderedServices;