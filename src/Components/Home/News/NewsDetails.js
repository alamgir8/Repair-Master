import React from 'react';

const NewsDetails = (props) => {
    const {title, author, date, img} = props.news;
    return (
        <div className='col-md-3 bg-light'>
            <div className="news">
                <div className="news-image">
                    <img src={img} alt="news-pic" className='img-fluid'/>
                </div>
                <div className="news-description">
                    <p className='py-3 text-warning h6'>{date}</p>
                    <h4 className='py-1'>{title}</h4>
                    <p >By <span className='h6 sub-header'>{author}</span></p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;