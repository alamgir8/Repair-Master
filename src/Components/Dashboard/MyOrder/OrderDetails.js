import React from 'react';

const OrderDetails = (props) => {
    const {service, status} = props.order;
   
    let btnColor = ''
    if (status === 'Done') {
        btnColor = 'btn btn-success text-white';
    } 
    if (status === 'Pending') {
        btnColor = 'btn btn-warning text-white'
    }
    if (status === 'Ongoing') {
        btnColor = 'btn btn-primary text-white'
    }
   
  
    return (
        <div className='col-md-4 col-sm-6 col-lg-4 m-auto'>
            <div className="card my-order p-3">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="header-img">
                            <img src={service.imageURL} alt="service pic" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 text-right">
                        <button className={btnColor}>{status}</button>
                    </div>
                </div>
                <div className="order-info pt-3">
                    <h4>{service.title}</h4>
                    <p><small>{service.info}</small></p>
                </div>
               
            </div>            
        </div>
    );
};

export default OrderDetails;