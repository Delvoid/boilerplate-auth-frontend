import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const ProtectedRoute = ({ component: RouteComponent, roles = ['user'] }) => {
  const { user } = useGlobalContext()
  let hasRequiredRole = user && roles.includes(user.role) ? true : false

  if (user && hasRequiredRole) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
}

export default ProtectedRoute
