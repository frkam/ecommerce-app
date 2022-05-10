const Button: React.FC<{ children?: JSX.Element | string }> = ({
  children,
}) => {
  return (
    <button className="bg-blue-600 py-1 px-6 mt-3 rounded">{children}</button>
  );
};

export default Button;
