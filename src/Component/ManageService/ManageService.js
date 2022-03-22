import React, { useEffect, useState } from "react";
import SingelService from "./SingelService";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://hidden-shore-94920.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className="container">
      <div className="text-center d-block my-4 py-3">
        <h1 className=" fs-1 fw-bolder my-2 text-primary  "> Manage ALL Services </h1>
        <hr className="w-25 mx-auto " />
      </div>
     <div className="row">
     {
          services.map(serviceP => <SingelService key={serviceP._id} serviceP={serviceP}></SingelService>)
      }
     </div>
    </div>
  );
};

export default ManageService;
