import React from 'react';

const ManageServiceDetails = (props) => {
    const {_id, title, imageURL} = props.service;

    const handleDeleteService = (id) => {
       
        fetch(`https://repair-master-server.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
            headers:{'Content-type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Service delete Successfully !')
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className='col-md-2 offset-md-1 card p-3 m-2'>
            <div className="service-image">
                <img src={imageURL} alt="service pic" className='img-fluid'/>
            </div>
            <div className="service-info">
                <h5 className='py-3'>{title}</h5>
                {/* <p><small>{info}</small></p> */}
            </div>
            <button onClick={() => handleDeleteService(_id)} className='btn button-white'>DELETE <span><i className="bi bi-trash"></i></span></button>
        </div>
    );
};

export default ManageServiceDetails;