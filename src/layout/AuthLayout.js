import React from 'react'
//  import SignIn from '../component/auth/SignIn'
//  import SignUp from '../component/auth/SignUp'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  
  return (
    <div>
    
    <Outlet />
     
    </div>
  )
}

export default AuthLayout