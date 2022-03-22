import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://hidden-shore-94920.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto col-sm-12 px-2">
        <div
          className="border p-5  my-5 control-from "
          style={{
            boxShadow: "10px 10px 8px 10px #888888",
            borderRadius: "5px",
          }}
        >
          <h6 className="text-center">Add Service For Admin Only</h6>

          <form className="form_control" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-100 p-2 my-2 border"
              type="text"
              {...register("image")}
              placeholder="ImageLink"
            />
            <input
              className="w-100 p-2 my-2 border"
              {...register("nameProduct")}
              placeholder="NameDoctor"
            />
            <input
              className="w-100 p-2 my-2 border"
              {...register("price")}
              placeholder="VisitPrice"
              type="number"
            />
            <input
              className="w-100 p-2 my-2 border"
              {...register("discountPrice")}
              placeholder=" DisCount Price"
              type="number"
            />
            {/* <input className='w-100 p-1 my-2' {...register("email")}  placeholder='Email'/> */}
            <textarea
              className="w-100 p-2 my-2 border"
              type="text"
              {...register("details")}
              placeholder="details"
            />
            <input
              style={{ backgroundColor: "#000050" }}
              className="btn btn-outline-light text-light  w-100"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
