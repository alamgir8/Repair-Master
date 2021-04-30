import React, { useEffect, useState } from 'react';

const OrderDetails = (props) => {
    const {service, status} = props.order;
    const [rating, setRating] = useState(null);
    
    useEffect(() => {
        console.log(rating);
    }, [])

   
  
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
                        <button className='btn btn-success text-white' id='status-color'>{status}</button>
                    </div>
                </div>
                <div className="order-info pt-3">
                    <h4>{service.title}</h4>
                    <p><small>{service.info}</small></p>
                </div>
               {status === 'Done' &&  <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <div className="star-rating py-2">
                            {
                            [...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return <span >
                                    <label className='mx-1 star'>
                                        <input type="radio" name="rating" className='d-none' value={ratingValue} onClick={()=> setRating(ratingValue)}/>
                                        <i className="bi bi-star-fill"></i>
                                    </label>
                                </span>
                            })
                            }
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <button className='btn btn-primary'><small>Give Rating</small></button>
                    </div>
                </div>}
            </div>            
        </div>
    );
};

export default OrderDetails;