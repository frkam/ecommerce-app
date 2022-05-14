import Button from "../UI/button";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="h-full">
      <div className="flex items-center flex-col w-1/4 mx-auto">
        <h1 className="text-xl">Sign Up</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              value={password}
              onChange={handleChange}
            />
          </div>
          <Button>Sign in</Button>
        </form>
        <div className="flex">
          <h3 className="mr-2">Don't have an account? </h3>
          <NavLink to="/signup" className="underline">
            Sign up now!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
