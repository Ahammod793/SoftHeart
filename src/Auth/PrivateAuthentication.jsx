import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateAuthentication({children}) {
    const {user} = useContext(AuthContext)
  if(user){
    return children
  }
  else{
    return <Navigate to={"/soft_heart_register_accessPage"} />
  }
}
