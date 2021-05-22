import React from 'react';
import swal from 'sweetalert';


const ManageServiceDetails = (props) => {
    const {_id, title, imageURL} = props.service;

    const handleDeleteService = (id) => {
       
        fetch(`https://repair-master-server.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
            headers:{'Content-type' : 'application/json'}
        })
        .then(res => {
            swal({
                title: "Service delete Successfully!",
                icon: "success",
              });
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
            </div>
            <button onClick={() => handleDeleteService(_id)} className='btn button-white'>DELETE <span><i className="bi bi-trash"></i></span></button>
        </div>
    );
};

export default ManageServiceDetails;