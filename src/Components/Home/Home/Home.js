import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BusinessCard from '../BusinessCard/BusinessCard';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header';
import News from '../News/News';
import OurSolution from '../OurSolution/OurSolution';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='home-section'>
            <Navigation/>
            <Header/>
            <BusinessCard/>
            <Services/>
            <OurSolution/>
            <News/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;