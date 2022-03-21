import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="text-center d-block my-4">
        <h1 className=" fs-1 fw-bolder my-2 text-primary  "> About Us </h1>
        <hr className="w-25 mx-auto " />
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <img className="w-100" src="https://i.ibb.co/q53Ww6M/istockphoto-1284869164-612x612.jpg" alt="" />
              </div>
              <div className="col-md-6">
                  <p className="fs-2 py-3">Lacinia in netus vel a, scelerisque mauris quis et, purus blandit sapien, pharetra, viverra volutpat risus non tortor, cras egestas et maecenas facilisi imperdiet quam fringilla dui mauris enim, nec arcu, interdum sit nisi est facilisi sodales viverra proin et.</p>
              </div>
              <div className="col-md-12">
                  <img className="w-100 rounded mt-5" src="https://i.ibb.co/sKpWT95/qq.png" alt="" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
