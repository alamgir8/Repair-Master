import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div id='contact' className='contact-section bg-light py-5'>
            <div className="container p-4">
                <div className='text-center'>
                    <h6 className='sub-header'>CONTACT US <span className='mx-2'><i className="bi bi-envelope"></i></span></h6>
                    <h2 className='main-header'>Always Connect with Us</h2>
                </div>
                <form className='p-3 bg-form' onSubmit={handleSubmit(onSubmit)}>
                                                
                        <div className="mb-3">
                            <label className="form-label h6">Name</label>
                            <input type="text" name='name' className="form-control" placeholder='Your Name' {...register("name")} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label h6">Email</label>
                            <input type="email" name='email' className="form-control" placeholder='Your Email' {...register("email")} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label h6" >Massage</label>
                            <textarea name='massage' className="form-control"  placeholder='Your Comment' {...register("massage")} required/>
                        </div>
                                            
                        <div className="my-3 text-center pt-3">
                            <button type="submit" className="btn bg-info text-white px-5 py-2">SEND</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;