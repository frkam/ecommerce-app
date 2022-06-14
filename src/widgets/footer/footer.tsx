import { useState } from "react"

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { IoIosArrowDropdown } from "react-icons/io"

import { Logo } from "components/UI/logo"

const initActiveList = [false, false, false]

const Footer = () => {
  const [activeList, setActiveList] = useState(initActiveList)

  const toggleActiveList = (position: number) => () => {
    const newActiveList = [...initActiveList]

    newActiveList[position] = !activeList[position]

    console.log(newActiveList)

    setActiveList(newActiveList)
  }

  return (
    <footer className="bg-primary-dark-300 h-full lg:h-[29.5rem]">
      <section className="2xl:ml-[16%] 2xl:mr-[23.2%] lg:flex-row flex-col tn:mx-auto mx-2 flex h-full justify-around xl4:justify-between lg:pt-24 pt-7 ">
        <div className="flex flex-col items-center mb-12 lg:items-stretch lg:mb-0 lg:ml-3">
          <Logo />
          <div className="text-base font-lato text-text-sub-dark-700">
            <h4 className="mt-6 mb-2">Contact info</h4>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>
        <div className="flex tn1:justify-around justify-evenly lg:w-full mb-5 flex-col tn1:flex-row items-start tn:ml-8">
          <div>
            <div
              className={`flex items-center justify-start ${
                activeList[0] ? "text-accent" : "text-black"
              } tn:text-black gap-x-1`}
              onClick={toggleActiveList(0)}
            >
              <h2 className={`footer-header`}>Categories</h2>
              <IoIosArrowDropdown className="tn1:hidden" />
            </div>
            <ul
              className={`footer-list ${
                activeList[0] ? "footer-list-active" : "footer-list-disabled"
              } tn1:flex items-start`}
            >
              <li>
                <NavLink to="pc-and-laptops">Laptops & Computers</NavLink>
              </li>
              <li>
                <NavLink to="cameras-and-photos">Cameras & Photography</NavLink>
              </li>
              <li>
                <NavLink to="smartphones-and-tablets">Smart Phones & Tablets</NavLink>
              </li>
              <li>
                <NavLink to="videogames-and-consoles">Video Games & Consoles</NavLink>
              </li>
              <li>
                <NavLink to="waterproof-Headphones">Waterproof Headphones</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div
              className={`flex items-center ${
                activeList[1] ? "text-accent" : "text-black"
              } tn:text-black gap-x-1`}
              onClick={toggleActiveList(1)}
            >
              <h2 className={`footer-header`}>Customer Care</h2>
              <IoIosArrowDropdown className="tn1:hidden" />
            </div>
            <ul
              className={`footer-list ${
                activeList[1] ? "footer-list-active" : "footer-list-disabled"
              } tn1:flex`}
            >
              <li>
                <NavLink to="my-account">My Account</NavLink>
              </li>
              <li>
                <NavLink to="#">Discount</NavLink>
              </li>
              <li>
                <NavLink to="#">Returns</NavLink>
              </li>
              <li>
                <NavLink to="#">Orders History</NavLink>
              </li>
              <li>
                <NavLink to="#">Order Tracking</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div
              className={`flex items-center ${
                activeList[2] ? "text-accent" : "text-black"
              } tn:text-black gap-x-1`}
              onClick={toggleActiveList(2)}
            >
              <h2 className={`footer-header`}>Pages</h2>
              <IoIosArrowDropdown className="tn1:hidden" />
            </div>
            <ul
              className={`footer-list ${
                activeList[2] ? "footer-list-active" : "footer-list-disabled"
              } tn1:flex`}
            >
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="#">Browse the Shop</NavLink>
              </li>
              <li>
                <NavLink to="#">Category</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark-500 h-[3.3rem] sm:pb-0 box-content pb-16 flex items-center justify-around">
        <span className="font-lato font-semibold text-text-sub-dark-500 tn:text-base text-sm">
          ©Webecy - All Rights Reserved
        </span>
        <div className="flex gap-x-3">
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://instagram.com/">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/">
            <BsTwitter />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
