import { BiPhoneCall, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";

import logo from "../images/logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <section className="h-11 bg-primary-dark-900 flex">
        <div className="font-josefin-sans container max-w-6xl mx-auto flex items-center justify-between text-white">
          <div className="flex items-center ml-2">
            <address className="text-base flex items-center gap-x-3 mr-12">
              <HiOutlineMail />
              <a className="not-italic" href="mailto:mhhasanul@gmail.com">
                mhhasanul@gmail.com
              </a>
            </address>
            <address className="text-base flex items-center gap-x-3">
              <BiPhoneCall />
              <a className="not-italic" href="tel:84588256398">
                84588256398
              </a>
            </address>
          </div>
          <div className="flex items-center mr-2">
            <div className="flex items-center mr-5 gap-x-1">
              <NavLink to="login">Login</NavLink>
              <BiUser />
            </div>
            <div className="flex items-center mr-7 gap-x-1">
              <NavLink to="wishlist">Wishlist</NavLink>
              <BsHeart />
            </div>
            <NavLink to="cart">
              <BsCart className="text-xl" />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="h-20 flex items-center max-w-[73rem] mx-auto w-full">
        <NavLink to="/" className="lg:mr-[5.5rem] ml-2 mr-2">
          <img src={logo} alt="Hekto logo" className="w-24" />
        </NavLink>
        <nav className="flex font-lato text-text-dark gap-x-4 lg:gap-x-9 font-medium items-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hidden md:flex" : "hidden md:flex"
            }
            to=""
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hidden md:flex" : "hidden md:flex"
            }
            to="products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hidden md:flex" : "hidden md:flex"
            }
            to="shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hidden md:flex" : "hidden md:flex"
            }
            to="contact"
          >
            Contact
          </NavLink>
          <FaBars onClick={toggleHandler} className="md:hidden" />
          {isOpen && (
            <div className="fixed w-52 h-screen left-0 top-0 bg-primary shadow-xl">
              <div className="relative">
                <AiOutlineClose
                  onClick={toggleHandler}
                  className="absolute top-0 right-0"
                />
                <div className="flex flex-col">
                  <NavLink to="">Home</NavLink>
                  <NavLink to="products">Products</NavLink>
                  <NavLink to="shop">Shop</NavLink>
                  <NavLink to="contact">Contact</NavLink>
                </div>
              </div>
            </div>
          )}
        </nav>
        <div className="grow flex justify-end mr-2">
          <input
            type="search"
            className="border-2 border-input-border outline-none py-[6px] px-3 w-44 lg:w-72"
          />
          <button className="bg-accent w-[51px] h-10 flex justify-center items-center text-2xl">
            <BsSearch className="text-white" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
