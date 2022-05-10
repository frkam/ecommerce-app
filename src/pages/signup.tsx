import Button from "../UI/button";

const SignUp = () => {
  return (
    <div className="h-full">
      <div className="flex items-center flex-col w-1/4 mx-auto">
        <h1 className="text-xl">Sign Up</h1>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black rounded-md h-9 p-1"
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
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
