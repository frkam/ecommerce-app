import React from "react";

type size = "sm" | "md" | "lg";

const Button: React.FC<{
  children?: React.ReactNode;
  сlickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: size;
  className?: string;
  type?: "button" | "submit";
}> = ({ children, сlickHandler, size = "sm", className, type }) => {
  const buttonClass = `bg-accent h-10 rounded w-[8.4rem] text-white ${
    className ? className : ""
  }`;

  return (
    <button type={type} onClick={сlickHandler} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
