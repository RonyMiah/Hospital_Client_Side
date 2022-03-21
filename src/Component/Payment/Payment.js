import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <h1 className='text-xl text-center my-5 fs-1 fw-bolder'>payment Methode Comming soon</h1>
           
            <Link to='/' className='btn btn-success mx-auto d-block w-25'> Go Back  </Link>
        </div>

    );
};

export default Payment;