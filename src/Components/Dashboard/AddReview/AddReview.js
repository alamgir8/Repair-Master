import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';
import './../Dashboard.css'

const AddReview = () => {
    const [imageURL, setImageURL] = useState();
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            name: data.name,
            from: data.from,
            quote: data.review,
            imageURL: imageURL
        }
        fetch('https://repair-master-server.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => {
            alert('Thanks for rating us!')
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleImageUpload = (e) => {
        console.log(e.target.files);
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
        <div className='add-review-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar/>
                    </div>
                    <div className="col-md-9">
                                <div className="card my-3 p-4">
                                <h5 className='py-3'>Add A Review</h5>
                                    <form className='bg-form' onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                    <label className="form-label h6">Photo</label>
                                                    <input type="file" name='file' className="form-control" onChange={handleImageUpload} required />
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <label className="form-label h6">Name</label>
                                                    <input type="text" name='name' className="form-control" placeholder='Your Name' {...register("name")} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label h6">From</label>
                                                    <input type="text" name='from' className="form-control" placeholder='Your Location' {...register("from")} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label h6" >Review</label>
                                                    <textarea name='review' className="form-control"  placeholder='Your Review' {...register("review")} required/>
                                                </div>
                                            
                                            <div className="my-3 text-right pt-3">
                                                <button type="submit" className="btn button-white p-2">GIVE REVIEW</button>
                                        </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default AddReview;