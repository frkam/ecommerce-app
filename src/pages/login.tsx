import Button from "../UI/button";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "store/store";
import { authSignIn } from "store/slices/authSlice";

const defaultUser = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const [user, setUser] = useState(defaultUser);
  const { email, password } = user;

  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authSignIn(user));
    setUser(defaultUser);
  };

  return (
    <div className="h-full">
      <div className="flex items-center flex-col w-1/4 mx-auto">
        <h1 className="text-xl">Sign In</h1>
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
