import React from 'react';

const OrderDetails = (props) => {
    const {service, status, orderTime} = props.order;
    return (
        <div className='col-md-6'>
            <div className="card p-3">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="header-img">
                            <img src={service.imageURL} alt="service pic" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 text-right">
                        <button className='btn btn-primary'>{status}</button>
                    </div>
                </div>
                <div className="order-info pt-3">
                    <h4>{service.title}</h4>
                    <p>{service.info}</p>
                </div>
                {/* <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <p>
                            <span className='h6'>Order Cost :</span> ${service.price}
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <p><span className='h6'>Create Time :</span>{orderTime}</p>
                    </div>
                </div> */}
            </div>            
        </div>
    );
};

export default OrderDetails;