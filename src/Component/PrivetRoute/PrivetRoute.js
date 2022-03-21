import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth';



const PrivetRoute = ({ children, ...rest }) => {

    
    const { user, isloading } = useAuth()
    let location = useLocation();

    if (isloading) { return <Spinner className="mx-auto" animation="grow" /> }

    if(user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />


};

export default PrivetRoute;