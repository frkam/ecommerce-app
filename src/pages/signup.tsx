import Button from "../UI/button";

import React, { useState } from "react";
import { useAppDispatch } from "store/store";
import { authSignUp } from "store/slices/authSlice";

const defaultUser = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [user, setUser] = useState(defaultUser);
  const { email, password, confirmPassword } = user;

  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authSignUp(user));
    setUser(defaultUser);
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
          <div className="flex flex-col w-full">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
