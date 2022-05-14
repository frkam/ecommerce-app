const Button: React.FC<{
  children?: JSX.Element | string;
  сlickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, сlickHandler }) => {
  return (
    <button
      onClick={сlickHandler}
      className="bg-blue-600 py-1 px-6 mt-3 rounded w-full"
    >
      {children}
    </button>
  );
};

export default Button;
