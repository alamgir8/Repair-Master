import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5055/isAdmin', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(success => setIsAdmin(success))

    }, [])

    return (
        <div className='dashboard-section'>
            <Navigation/>
           <div className="container">
                {
                isAdmin ?  <Sidebar/> 
                :
                <UserSidebar/>
                }
            </div>            
        </div>
    );
};

export default Dashboard;