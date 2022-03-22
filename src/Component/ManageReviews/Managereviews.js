import React, { useEffect, useState } from 'react';
import ReviewService from '../ReviewShow/ReviewService';

const ManageReviews = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    const filter = services.filter(ss => ss.isPending===false );
  useEffect(() => {
    fetch("https://hidden-shore-94920.herokuapp.com/reviews/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  return (
    <div className="mx-3">
      
      <div className="text-center d-block my-4 py-3">
        <h1 className=" fs-1 fw-bolder my-2 text-primary  "> Manage Users Reviews </h1>
        <hr className="w-25 mx-auto " />
      </div>
      <div className="row  mb-5 ">
        {filter.map((service) => (
          <ReviewService key={service._id} service={service} isAdmin={true}></ReviewService>
          
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;