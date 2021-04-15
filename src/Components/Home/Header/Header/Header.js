import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className='header-section'>
            <Navigation/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;