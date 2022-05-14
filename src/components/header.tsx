import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-3 h-20">
      <div className="flex mx-6 items-center justify-between">
        <div className="flex">
          <nav className="mr-6">
            <div className="space-y-2 bg-gray-800 p-3 rounded shadow">
              <span className="block w-8 h-1 bg-gray-100"></span>
              <span className="block w-8 h-1 bg-gray-100"></span>
              <span className="block w-8 h-1 bg-gray-100"></span>
            </div>
          </nav>
          <img alt="logo" src={logo} className="w-52" />
        </div>
        <div className="flex">
          <NavLink to="login">
            <FontAwesomeIcon icon={solid("user")} className="w-8 h-8" />
          </NavLink>
          <NavLink to="cart">
            <FontAwesomeIcon
              icon={solid("cart-shopping")}
              className="w-8 h-8"
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
