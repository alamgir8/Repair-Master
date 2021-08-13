import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import Payment from '../Payment/Payment';
import './../CheckOut.css';

const CheckOut = () => {
  const { _id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const getService = async () => {
      const res = await fetch(
        'https://repair-master-server.herokuapp.com/services'
      );
      const data = await res.json();
      let result = data.find((element) => element._id === _id);
      setService(result);
    };

    return getService();
  }, [_id]);

  return (
    <div className="checkout-section">
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4 className="text-center py-3">Your Selected Service</h4>
            <div className="card p-4">
              <div className="service-image text-center pb-3">
                <img
                  src={service.imageURL}
                  alt="service"
                  className="img-fluid"
                />
              </div>
              <div className="service-title">
                <h4>{service.title}</h4>
                <p>
                  <small>{service.info}</small>
                </p>
                <p className="text-muted text-center h5">
                  {' '}
                  Service Cost
                  <span className="text-danger"> ${service.price}</span>{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <h4 className="text-center py-3">
              Submit This Form for Add Service
            </h4>
            <div className="card p-4">
              <Payment service={service} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
