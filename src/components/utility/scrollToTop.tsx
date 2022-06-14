import { useLayoutEffect } from "react"
import React from "react"
import { useLocation } from "react-router"

export const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return <React.Fragment>{children}</React.Fragment>
}
