import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Context/AuthProvider/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState();
  const { user, registerUser, isloading, autherror, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    console.log(registerData);
  };
  const handelOnSubmit = (e) => {
    registerUser(registerData.email, registerData.password, registerData.name, location, navigate);
    e.preventDefault();
  };
  const handelGoogleSignIn = () =>{
    signInUsingGoogle(location, navigate);
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://pngimg.com/uploads/doctor/doctor_PNG16043.png"
              alt=""
            />
          </div>

          {/* From Start  */}

          <div className="col-md-6 p-5 mt-5 ">
            {user?.email && (
              <div
                class="alert alert-primary d-flex align-items-center"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div>Register Successfully</div>
              </div>
            )}
            {autherror && (
              <div
                class="alert alert-primary d-flex align-items-center"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className="text-danger">{autherror}</div>
              </div>
            )}

            <div className="text-center d-block my-4">
              <h1 className=" fs-3 fw-bolder mt-2 "> Register Here </h1>
              <hr className="w-25 mx-auto " />
              {isloading && <Spinner animation="grow" />}
            </div>

            {!isloading && (
              <form
                onSubmit={handelOnSubmit}
                className="border p-5 rounded"
                style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control py-2 mb-3 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                    name="name"
                    onBlur={handelOnBlur}
                  />

                  <input
                    type="email"
                    class="form-control py-2 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    name="email"
                    onBlur={handelOnBlur}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control py-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    onBlur={handelOnBlur}
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn- bg-stone-500	 text-white mx-auto d-block w-100 mb-2 fw-bolder"
                >
                  Sign-Up
                </button>
                <button
                 onClick={handelGoogleSignIn}
                  type="submit"
                  class="btn btn- bg-stone-500	 text-white mx-auto d-block w-100 fw-bolder "
                >
                  Google Sign-In
                </button>
                <Link
                  to="/login"
                  className="text-primary text-end d-block mt-3 text-decoration-underline  "
                >
                  {" "}
                  <span>Already Register Login Here</span>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
