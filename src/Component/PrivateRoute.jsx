import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const {pathname} = useLocation()
    if(!user){
        return children
    }else{
        <Navigate state={pathname} to='/login'></Navigate>
    }
   

};

export default PrivateRoute;