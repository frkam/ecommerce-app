import { Logo } from 'components/UI/logo'
import { auth } from 'firebase-config'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { BiPhoneCall, BiUser } from 'react-icons/bi'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineManageSearch } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const width = useWindowWidth()
  const [user] = useAuthState(auth)

  const isSmWindowSize = width > 640

  const isActiveClass = (isActive: boolean, basicStyle?: string) => {
    return isActive
      ? `text-accent ${basicStyle ? basicStyle : ''}`
      : `${basicStyle ? basicStyle : ''}`
  }

  return (
    <header>
      <section className="h-11 bg-primary-dark-900 flex xl:px-0">
        <div className="font-josefin-sans container max-w-8xl mx-1 tn:mx-5 xl:mx-auto flex items-center justify-between text-white">
          <div className="flex items-center ml-2 justify-between sm:justify-start w-full tn:text-base text-sm">
            <address className="flex items-center gap-x-1 tn:gap-x-3 sm:mr-12">
              <HiOutlineMail />
              <a className="not-italic" href="mailto:mhhasanul@gmail.com">
                mhhasanul@gmail.com
              </a>
            </address>
            <address className="flex items-center gap-x-1 tn:gap-x-3">
              <BiPhoneCall />
              <a className="not-italic" href="tel:84588256398">
                84588256398
              </a>
            </address>
          </div>
          {isSmWindowSize && (
            <div className="flex items-center mr-2">
              {!user && (
                <div className="flex items-center mr-5 gap-x-1">
                  <NavLink to="login">Login</NavLink>
                  <BiUser />
                </div>
              )}
              {user && (
                <div className="flex items-center mr-5 gap-x-1">
                  <NavLink to="profile">Profile</NavLink>
                  <BiUser />
                </div>
              )}
              <div className="flex items-center mr-7 gap-x-1">
                <NavLink to="wishlist">Wishlist</NavLink>
                <BsHeart />
              </div>
              <NavLink to="cart">
                <BsCart className="text-xl" />
              </NavLink>
            </div>
          )}
        </div>
      </section>
      <section className="tn:h-20 flex items-start tn:items-center xl:max-w-8xl xl:mx-auto mx-1 tn:mx-5 flex-col tn:flex-row">
        <div className="flex mt-3 tn:mt-0 w-full">
          <Logo className="ml-2 w-24 h-8" />
          <nav className="text-text-dark gap-x-4 lg:gap-x-9 font-medium items-end tn:items-center flex ml-6 tn:ml-9 md:ml-[5.5rem] w-full">
            {isSmWindowSize && (
              <>
                <NavLink
                  className={({ isActive }) => isActiveClass(isActive)}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActiveClass(isActive)}
                  to="categories"
                >
                  Categories
                </NavLink>
              </>
            )}
            <NavLink
              className={({ isActive }) => isActiveClass(isActive)}
              to="contact"
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="grow flex justify-end tn:mt-0 tn:mb-0 mt-4 mb-4 w-full">
          <input
            type="search"
            className="border-2 border-input-border border-r-0 outline-none py-[6px] px-3 w-full tn:w-44 lg:w-72"
          />
          <button className="bg-accent w-[51px] h-10 flex justify-center items-center text-2xl">
            <BsSearch className="text-white" />
          </button>
        </div>
      </section>
      {!isSmWindowSize && (
        <div className="fixed h-14 w-full drop-shadow-top shadow-top bottom-0 bg-primary z-50">
          <nav className="flex h-full transition">
            <NavLink
              className={({ isActive }) =>
                isActiveClass(isActive, 'text-sm mobile-nav-item')
              }
              to="/"
            >
              <AiOutlineHome className="text-3xl" />
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActiveClass(isActive, 'text-sm mobile-nav-item')
              }
              to="categories"
            >
              <MdOutlineManageSearch className="text-3xl" />
              Categories
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActiveClass(isActive, 'text-sm mobile-nav-item')
              }
              to="wishlist"
            >
              <AiOutlineHeart className="text-3xl" />
              Wishlist
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActiveClass(isActive, 'text-sm mobile-nav-item')
              }
              to="cart"
            >
              <BsCart className="text-3xl" />
              Cart
            </NavLink>
            {!user && (
              <NavLink
                className={({ isActive }) =>
                  isActiveClass(isActive, 'text-sm mobile-nav-item')
                }
                to="login"
              >
                <BiUser className="text-3xl" />
                Login
              </NavLink>
            )}
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActiveClass(isActive, 'text-sm mobile-nav-item')
                }
                to="profile"
              >
                <BiUser className="text-3xl" />
                Me
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
