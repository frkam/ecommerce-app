import React from 'react'
import { NavLink } from 'react-router-dom'

type Size = 'sm' | 'md' | 'lg'

export const Button: React.FC<{
  children?: React.ReactNode
  сlickHandler?: any
  size?: Size
  className?: string
  type?: 'button' | 'submit'
  disabled?: true | false
  link?: true | false
  linkTo?: string
}> = ({
  children,
  сlickHandler,
  size = 'sm',
  className,
  type,
  disabled,
  link = false,
  linkTo,
}) => {
  const buttonClass = `bg-accent h-10 rounded w-[8.4rem] text-white ${
    className ? className : ''
  } ${disabled ? 'bg-disabled' : ''}`

  if (link && linkTo) {
    return (
      <NavLink
        to={linkTo}
        className={`${buttonClass} flex items-center justify-center`}
      >
        {children}
      </NavLink>
    )
  }

  return (
    <button
      type={type}
      onClick={сlickHandler}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
