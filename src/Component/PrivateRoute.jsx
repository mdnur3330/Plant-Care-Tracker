import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Looding from './Looding';

const PrivateRoute = ({children}) => {
    const {loding, user} = useContext(AuthContext)
    const location = useLocation()

    if(loding){
        return <Looding></Looding>
    }

    if(user){
        return children
    }else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
   

};

export default PrivateRoute;