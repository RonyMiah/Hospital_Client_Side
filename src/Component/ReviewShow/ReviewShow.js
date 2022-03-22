import React, { useEffect, useState } from "react";
import ReviewService from "./ReviewService";

const ReviewShow = () => {
  const [services, setServices] = useState([]);
  // const [isApproving , setIsApproving] = useState(false);

  // console.log(services);
  const filter = services.filter((ss) => ss.isPending !== false);
  
  useEffect(() => {
    fetch("https://hidden-shore-94920.herokuapp.com/reviews/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  return (
    <div className="mx-3">
      <h1 className="text-center mt-5 fs-1 fw-bolder">Customer Reviews</h1>
      <h6 className="text-center fs-5 fw-bolder mb-5">Customers Happiness</h6>
      <hr className="w-25 mx-auto " />

      <div className="row  mb-5 mt-3 ">
        {filter.map((service) => (
          <ReviewService key={service._id}  service={service} ></ReviewService>
        ))}
      </div>
    </div>
  );
};

export default ReviewShow;
