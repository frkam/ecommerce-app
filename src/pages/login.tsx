const Login: React.FC = () => {
  return (
    <div className="h-full">
      <div className="flex items-center flex-col">
        <h1 className="text-xl">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
