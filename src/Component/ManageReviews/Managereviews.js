import React, { useEffect, useState } from 'react';
import ReviewService from '../ReviewShow/ReviewService';

const ManageReviews = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    const filter = services.filter(ss => ss.isPending===false );
  useEffect(() => {
    fetch("http://localhost:5000/reviews/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  return (
    <div className="mx-3">
      <h1 className="text-center mt-5 fw-bolder">Customer Reviews</h1>
      <h6 className="text-center  fw-bolder mb-5">Customers Happiness</h6>

      <div className="row  mb-5 ">
        {filter.map((service) => (
          <ReviewService key={service._id} service={service}></ReviewService>
          
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;