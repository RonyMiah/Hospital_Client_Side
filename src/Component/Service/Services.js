import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div
      id="services"
      className=""
      style={{ background: "#F1F5F9", borderRadius: "60px" }}
    >
      <div className="text-center d-block my-4 py-3">
        <h1 className=" fs-1 fw-bolder my-2 text-primary  "> Our Services </h1>
        <hr className="w-25 mx-auto " />
      </div>

      <div
        className=" py-3 mx-auto row row-cols-1 row-cols-md-2 justify-content-start row-cols-lg-2 row-cols-sm-1 g-4"
        style={{ width: "90%" }}
      >
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        
      </div>
    </div>
  );
};

export default Services;
