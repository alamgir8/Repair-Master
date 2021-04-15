import React from 'react';

const TestimonialDetails = (props) => {
    const {name, from, quote, imageURL} = props.review;

    return (
        <div className='col-md-5 mx-auto p-4 my-3 m-2 card card-transform'>
            <div className="row">
                <div className="col-md-4">
                    <div className="customer-image">
                        <img src={imageURL} alt="customer" className='img-fluid'/>
                    </div>
                    <div className="customer-info py-2">
                        <span>{name}</span> <br/>
                        <span>{from}</span>
                    </div>
                </div>
                <div className="col-md-8">
                    <q>{quote}</q>
                </div>
            </div>            
        </div>
     
    );
};

export default TestimonialDetails;