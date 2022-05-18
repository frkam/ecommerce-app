import React from "react";

import { NavLink } from "react-router-dom";

const PageHero: React.FC<{ children: React.ReactNode; link: string }> = ({
  children,
  link,
}) => {
  return (
    <section className="lg:h-[17.8rem] h-32 bg-primary xl:px-5">
      <div className="flex flex-col justify-center h-full max-w-8xl ml-2 tn:ml-5 xl:mx-auto">
        <h1 className="font-josefin-sans text-4xl text-text font-bold">
          {children}
        </h1>
        <div className="font-lato font-medium">
          <NavLink to="/home">Home</NavLink>
          <NavLink className="text-accent ml-1" to={`/${link}`}>
            . {children}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
