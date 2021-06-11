import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { selectUser } from '../../../features/userSlice';


const ServiceDetails = (props) => {
    const {_id, title, info, imageURL} = props.service;
    const [isAdmin, setIsAdmin] = useState(false);
    const user = useSelector(selectUser)

    useEffect(() => {
        fetch('https://repair-master-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({email: user?.email})
        })
        .then(res => res.json())
        .then(success => setIsAdmin(success))
        

    }, [user?.email]);

    const handleAlert = () => {
        swal({
            title: "Admin can't order any service, for order service login with user Account",
            icon: "error",
          });
    }

    return (
            <div className='col-md-4'>
                <div className="card card-transform p-4">
                    <div className='service-image text-center pb-3'>
                        <img src={imageURL} alt="service" className='img-fluid'/>
                    </div>
                    <div className="service-title">
                        <h4 className='py-2'>{title}</h4>
                        <p>{info}</p>
                    </div>
                    {isAdmin ? 
                    <Link to={`/`}>
                            <button onClick={handleAlert} className='btn button-white text-primary w-100'>SELECT SERVICE</button>
                    </Link>:
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn button-white text-primary w-100'>SELECT SERVICE</button>
                    </Link>
                    }
                </div>
            </div>
    );
};

export default ServiceDetails;