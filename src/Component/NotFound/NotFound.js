import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='row'>
            <div className="col-md-12">
            <h2 className="text-danger fs-1 mt-4"> Oops! Page not found</h2>
                <img className="w-75" src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" className="card-img" alt="..." />
           
                <Link to="/"> <button className="btn btn-success mb-5">Back to Home</button> </Link>
                <div className="card bg-dark text-white col-md-12">

                    <div className="card-img-overlay">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;