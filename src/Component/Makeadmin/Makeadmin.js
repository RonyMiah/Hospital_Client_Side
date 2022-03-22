import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Makeadmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const onBlurHandel = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    const user = { email };

    fetch("https://hidden-shore-94920.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
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
          {/* Aleart Massage  Show */}

          {success && (
            <div
              className="  alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong className="text-success">
                Admin Added SuccessFully{" "}
              </strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          {/* Aleart Massage  Show */}

          <h1 className="text-center py-4 fs-4">Make Admin Page</h1>

          <Form onSubmit={handelSubmit}>
            <input
              style={{
                backgroundColor: "",
                border: "none",
                borderRadius: "4px",
              }}
              className="w-100 my-2 p-2 border"
              Placeholder="Admin Email"
              type="email"
              name="email"
              onBlur={onBlurHandel}
            />
            <br />

            <br />
            <input
              className="w-50 my-2 p-2 btn btn-warning mx-auto d-block   bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800   "
              type="submit"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Makeadmin;
