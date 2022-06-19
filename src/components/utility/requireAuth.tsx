import { auth } from 'firebase-config'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router'

export const RequireAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation()
  const [user, loading] = useAuthState(auth)

  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <React.Fragment>{children}</React.Fragment>
}
