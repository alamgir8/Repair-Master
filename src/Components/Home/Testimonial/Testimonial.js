import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import TestimonialDetails from './TestimonialDetails';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [])
    return (
        <div className='testimonial-section py-5'>
            <div className="container">
                <div className="service-header text-center py-5">
                    <h6 className='sub-header'>TESTIMONIALS <span className='mx-2'><i className="bi bi-star-fill"></i></span></h6>
                    <h2 className='text-white'>Our Customers Reviews</h2>
                </div>
                {reviews.length === 0 &&   <div className="text-center display-4">
                        <Spinner animation="grow" variant="warning" />
                </div>}
                <div className="row">
                    {
                        reviews.map(review => <TestimonialDetails review={review} key={review._id}></TestimonialDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;