import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='dashboard-section'>
            <Navigation/>
           <div className="container">
                <Sidebar/>
            </div>            
        </div>
    );
};

export default Dashboard;