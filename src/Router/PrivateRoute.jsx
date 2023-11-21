import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
        return <p>Loading....</p>
    }

    if(user){
        return children
    }

   return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivateRoute;