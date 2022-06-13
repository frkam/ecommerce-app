import React from "react";

import { NavLink } from "react-router-dom";

interface IBreadCrumb {
  link: string;
  title: string;
}

export const PageHero: React.FC<{
  children: React.ReactNode;
  breadCrumbs?: IBreadCrumb[];
}> = ({ children, breadCrumbs }) => {
  return (
    <div className="lg:h-[17.8rem] h-32 bg-primary xl:px-5">
      <div className="flex flex-col justify-center h-full max-w-8xl ml-2 tn:ml-5 xl:mx-auto">
        <h1 className="font-josefin-sans text-4xl text-text font-bold capitalize">
          {children}
        </h1>
        <div className="font-lato font-medium">
          <NavLink to="/">Home</NavLink>
          {breadCrumbs &&
            breadCrumbs?.map((breadCrumb, i, array) => {
              return (
                <NavLink
                  className={`ml-1 capitalize ${
                    i + 1 === array.length ? "text-accent" : ""
                  }`}
                  key={breadCrumb.title}
                  to={`/${breadCrumb.link}`}
                >
                  . {breadCrumb.title}
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};
