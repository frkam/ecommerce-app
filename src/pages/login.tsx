import Button from "../UI/button";

import { Link } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const [Password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="h-full">
      <div className="flex items-center flex-col w-1/4 mx-auto">
        <h1 className="text-xl">Login</h1>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black rounded-md h-9 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-2 border-black rounded-md h-9 p-1"
          />
        </div>
        <Button>Login</Button>
        <div className="flex">
          <h3 className="mr-2">Don't have an account? </h3>
          <Link to="/signup" className="underline">
            Sign up now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
