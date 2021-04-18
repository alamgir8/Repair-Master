import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';
import AllService from './AllService';
import CustomerDashboard from './CustomerDashboard';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(success => setIsAdmin(success))

    }, []);


    return (
        <div className='dashboard-section'>
            <Navigation/>
           <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        {
                        isAdmin ?  <Sidebar/> 
                        :
                        <UserSidebar/>
                        }
                    </div>
                    <div className="col-md-9">
                        
                        {
                            isAdmin ? <AllService/>
                            :
                            <CustomerDashboard/>
                        }
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Dashboard;