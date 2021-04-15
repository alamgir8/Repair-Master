import React, { useEffect, useState } from 'react';
import TestimonialDetails from './TestimonialDetails';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.log(err))

    }, [])
    return (
        <div className='testimonial-section my-5'>
            <div className="container">
                <div className="service-header text-center py-5">
                    <h6>TESTIMONIALS</h6>
                    <h2>Our Customers Reviews</h2>
                </div>
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