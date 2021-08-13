import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import swal from 'sweetalert';

const AddService = () => {
  const [imageURL, setImageURL] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!imageURL) {
      swal({
        title: 'image badly formatted!',
        icon: 'error',
      });
      return;
    }
    const createTime = new Date().toLocaleString().split(',')[0];
    const serviceData = {
      title: data.name,
      info: data.info,
      price: data.price,
      imageURL: imageURL,
      createTime: createTime,
    };
    fetch('https://repair-master-server.herokuapp.com/addService', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      swal({
        title: 'Service added successfully!',
        icon: 'success',
      });
    });
  };

  const handleImageUpload = (e) => {
    const imageDate = new FormData();
    imageDate.set('key', '12b535c0bab20335db20c56b41e1120a');
    imageDate.append('image', e.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload', imageDate).then((res) => {
      const url = res.data.data.display_url;
      console.log(url);
      setImageURL(url);
    });
  };

  return (
    <div className="add-service-section">
      <Navigation />
      <div className="px-3 mx-auto">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="card p-4 my-3">
              <h5 className="py-3">Add Service</h5>
              <form className="bg-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label h6">Photo</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    onChange={handleImageUpload}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label h6">Service Title</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Title"
                    {...register('name')}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label h6">Service Cost</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Cost"
                    {...register('price')}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label h6">Description</label>
                  <textarea
                    name="info"
                    className="form-control"
                    placeholder="Service Description"
                    {...register('info')}
                    required
                  />
                </div>

                <div className="my-3 text-right pt-3">
                  <button type="submit" className="btn button-white">
                    ADD SERVICE
                  </button>
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
