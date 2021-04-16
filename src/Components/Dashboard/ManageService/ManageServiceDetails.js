import React from 'react';

const ManageServiceDetails = (props) => {
    const {_id, name, info, imageURL} = props.service;

    const handleDeleteService = (id) => {
        console.log(id);
        fetch(`http://localhost:5055/deleteService/${id}`, {
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
        <div className='col-md-4 card p-3 m-1 mx-auto'>
            <div className="service-image">
                <img src={imageURL} alt="service pic" className='img-fluid'/>
            </div>
            <div className="service-info">
                <h5 className='py-3'>{name}</h5>
                {/* <p><small>{info}</small></p> */}
            </div>
            <button onClick={() => handleDeleteService(_id)} className='btn button'>DELETE <span><i className="bi bi-trash"></i></span></button>
        </div>
    );
};

export default ManageServiceDetails;