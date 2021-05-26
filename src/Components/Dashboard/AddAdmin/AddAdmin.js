import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import swal from 'sweetalert';

const AddAdmin = () => {
    const {register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const adminInfo = {
            name: data.name,
            email: data.email,
            imageURL: imageURL
        }
        fetch('https://repair-master-server.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(adminInfo)
        })
        .then(res => { 
            swal({
                title: "Admin Added Successfully!",
                icon: "success",
              });
        })
      
    }

    const handleImageUpload = (e) => {
        console.log(e.target.files[0]);
        const imageDate = new FormData();
        imageDate.set('key', '12b535c0bab20335db20c56b41e1120a');
        imageDate.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageDate)
        .then(res => {
            const url = res.data.data.display_url;
            setImageURL(url)
        })
       
    }

    return (
        <div className='add-admin-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                    
                        <div className="card p-4 my-3">
                        <h5 className='py-3'>Add Admin</h5>
                            <form className='bg-form' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label h6">Photo</label>
                                            <input type="file" name='file' className="form-control" onChange={handleImageUpload} required />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label h6">Name</label>
                                            <input type="text" name='name' className="form-control" placeholder='Name' {...register("name")} required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label h6" >Email</label>
                                            <input type="email" name='email' className="form-control"  placeholder='Email' {...register("email")} required/>
                                        </div>
                                       
                                        <div className="my-3 text-right">
                                            <button type="submit" className="btn button-white">Add Admin</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddAdmin;