import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BusinessCard from '../BusinessCard/BusinessCard';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header';
import OurSolution from '../OurSolution/OurSolution';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='home-section'>
            <Header/>
            <BusinessCard/>
            <Services/>
            <OurSolution/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;