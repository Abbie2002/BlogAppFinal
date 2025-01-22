import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
     const token= sessionStorage.getItem('logintoken')
     let verifyUser= false;
     if(token){
        verifyUser=true
     }

  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/>  //like if else, if verifyUser, go to <Outlet/> else go to <Navigate/>
  )
}

export default PrivateRoutes