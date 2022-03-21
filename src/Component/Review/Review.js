import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/AuthProvider/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth()

  const onSubmit = (data) => {
    data.isPending = false;
    axios
      .post("http://localhost:5000/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added Successfully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div
          className="  my-5 p-5 "
          style={{
            boxShadow: "10px 10px 8px 10px #888888",
            borderRadius: "5px",
          }}
        >
          <h1 className="text-center py-4 fs-4">Add Review Listing</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{
                backgroundColor: "#e7e7e7",
                border: "none",
                borderRadius: "4px",
              }}
              className="w-100 my-2 p-2"
              Placeholder="Your Name"
              value={user.displayName}
              {...register("Name")}
            />
            <input
              style={{
                backgroundColor: "#e7e7e7",
                border: "none",
                borderRadius: "4px",
              }}
              className="w-100 my-2 p-2"
              Placeholder="Enter Your Online Image link "
              {...register("image")}
            />
            <br />
            <input
              style={{
                backgroundColor: "#e7e7e7",
                border: "none",
                borderRadius: "4px",
              }}
              type="number"
              min="1"
              max="5"
              className="w-100 my-2 p-2"
              Placeholder="Review Points(out of 5)"
              {...register("number")}
            />
            <br />
            <textarea
              style={{
                backgroundColor: "#e7e7e7",
                border: "none",
                borderRadius: "4px",
              }}
              className="w-100 my-2 p-2"
              Placeholder=""
              {...register("about")}
            />
            <br />

            <br />
            <input
              className="w-100 my-2 p-2 btn btn-warning   bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800   "
              type="submit"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Review;
