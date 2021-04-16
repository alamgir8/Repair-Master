import React from 'react';
import iPhon from './../../../img/iPhon.jpg';
import laptop from './../../../img/laptop.jpg';
import smartphone from './../../../img/smartphone.jpg';
import repairPhone from './../../../img/repairPhone.jpg'
import NewsDetails from './NewsDetails';


const newsData = [
    {
        id: 1,
        img: iPhon,
        title : '5 Most Common Reasons for iPhone Repair',
        author: 'Alamgir',
        date: '10 April 2021'
    },
    {
        id: 2,
        img: laptop,
        title : '10 Ways to Make your Laptop Fast and Clean',
        author: 'Lemon',
        date: '15 Jan 2021'
    },
    {
        id: 3,
        img: smartphone,
        title : "What You should maintain to Make Your Smartphone save from damage",
        author: 'Shahabul',
        date: '20 March 2021'
    },
    {
        id: 4,
        img: repairPhone,
        title : "Is it Bad or Best ways to repairing Smartphone after Damage",
        author: 'Shovo',
        date: '20 March 2021'
    },

]
const News = () => {
    return (
        <div className='news-section py-5'>
            <div className="container">
            <div className="service-header text-center py-5">
                    <h6 className=''>REPAIR <span className='brand-second'>MASTER</span> NEWS <span className='mx-2'><i className="bi bi-newspaper"></i></span></h6>
                    <h2 className=''>Collection of tech news</h2>
                </div>
                <div className="row">
                    {
                        newsData.map(news => <NewsDetails news={news} key={news.id}></NewsDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default News;