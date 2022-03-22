import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";

const ReviewService = ({ service, isAdmin,  }) => {
 
  const { Name, number, about } = service;

  const handelApprove = async () => {
    try {
      const res = await axios.put(
        `https://hidden-shore-94920.herokuapp.com/review/approve/${service._id}`,
        {
          service,
        }
      );
      if (res.data) {
       
        alert("Successfully Approved");
        window.location.reload();
      }
      
      console.log(res.data);
    } catch (e) {
     
      console.log(e);
    }
  };

  const handelDelete = async () => {
    try {
      const res = await axios.delete(
        `https://hidden-shore-94920.herokuapp.com/services/delete/${service._id}`
        
      );
      if (res.data) {
       
        alert("Successfully Delete");
        window.location.reload();
      }
      
      console.log(res.data);
    } catch (e) {
     
      console.log(e);
    }
  };


  return (
    <div className="col-lg-3 col-md-6 col-sm-6 my-2  ">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">
            {" "}
            <i className="fas fs-3 fa-child"></i> {Name}{" "}
          </Card.Title>
          <small className="text-center d-block mb-4">Customer</small>
          <Card.Subtitle className="mb-2 text-warning text-center">
            <i className="fas fa-star"></i> Rating{" "}
            <span className="fw-bolder">{number}</span>
          </Card.Subtitle>
          <Card.Text className="text-center">{about}</Card.Text>
          {isAdmin && (
            <>
              <Button
                onClick={() => handelApprove()}
                className="ms-3 bg-success"
              >
                Approve
              </Button>
              <Button onClick={() => handelDelete()} className="ms-3 bg-danger">Delete</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewService;
