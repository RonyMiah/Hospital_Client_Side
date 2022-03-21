import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../Context/AuthProvider/useAuth';

const BookingFrom = (props) => {
    const { _id, nameProduct, image, price, details } = props.data;
    const { user } = useAuth();
    const initialInfo = {
      name: user.displayName,
      email: user.email,
      _id,
      nameProduct,
      image,
      price,
      details,
    };
  
    
  
    const redirect = useNavigate();
    const onSubmit = (data) => {
      data.id = _id;
      data.name = nameProduct;
      data.img = image;
      data.price = price;
      data.details = details;
  
    
    };
  
    return (
      <div
        className="border p-5 ms-3"
        style={{ boxShadow: "10px 10px 8px 10px #888888", borderRadius: "5px" }}
      >
        <h6 className="text-center">Fill the form below</h6>
  
        <form className="form_control " >
          <input
            className="w-100 p-2 my-2 border"
            placeholder="Name"
            defaultValue={user.displayName}
          />
          <input
            className="w-100 p-2 my-2 border"
            placeholder="Email"
            defaultValue={user.email}
          />
          <input
            className="w-100 p-2 my-2 border"
            type="number"
            placeholder="Contact Number"
            required
          />
          <input
            className="w-100 p-2 my-2 border"
            type="text"
            placeholder="address"
            required
          />
          <input
            className="w-100 p-2 my-2 border"
            type="text"
            placeholder="City"
            required
          />
  
          <input
            className="w-100 p-2 my-2 border"
            type="text"
            placeholder="State"
            required
          />
         
         
  
          <Link to='/payment'>
            <button
            type='submit'
              style={{ backgroundColor: "#000050" }}
              className="btn btn-outline-primary w-100 fw-bolder text-white"
            >
              Pay Now
            </button>
          </Link>
        </form>
      </div>
    );
};

export default BookingFrom;