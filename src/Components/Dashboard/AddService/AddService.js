import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const [imageURL, setImageURL] = useState()
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            info: data.info,
            imageURL: imageURL
        }
        fetch('https://repair-master-server.herokuapp.com/addService', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => {
            alert('Service added successfully !')
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleImageUpload = (e) => {
      
        const imageDate = new FormData();
        imageDate.set('key', '12b535c0bab20335db20c56b41e1120a')
        imageDate.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageDate)
        .then(res => {
            const url = res.data.data.display_url;
            setImageURL(url)
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <div className='add-service-section'>
            <Navigation/>
            <div className="container">
            <div className="row">
                    <div className="col-md-4">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8">
                        <h5 className='py-4 sub-header'>ADD A SERVICE</h5>
                            <div className="card bg-form  my-3 p-4">
                                <form className='p-3 bg-form' onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-3">
                                                <label className="form-label h6">Photo</label>
                                                <input type="file" name='file' className="form-control" onChange={handleImageUpload} required />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label className="form-label h6">Service Name</label>
                                                <input type="text" name='name' className="form-control" placeholder='Service Name' {...register("name")} required/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label h6" >Description</label>
                                                <textarea name='info' className="form-control"  placeholder='Service Description' {...register("info")} required/>
                                            </div>
                                        
                                            <div className="my-3 text-right pt-3">
                                                <button type="submit" className="btn button-white">ADD SERVICE</button>
                                        </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddService;