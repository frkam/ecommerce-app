import { PageHero } from 'components/UI/pageHero'
import { NavLink } from 'react-router-dom'
import LoginForm from './loginForm'

const Login = () => {
  const breadCrumbs = [
    {
      title: 'login',
      link: `/login`,
    },
  ]

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Login</PageHero>
      <div className="flex justify-center main-container">
        <div className="flex flex-col items-center w-[34rem] p-12 shadow-card">
          <h1 className="text-black font-josefin-sans text-[34px] font-bold">
            Login
          </h1>
          <p className="font-lato text-[17px] text-text-sub-dark-500 pb-9">
            Please login using account detail below
          </p>
          <LoginForm />
          <NavLink to="/sign-up" className="text-text-sub-dark-500 mt-7">
            Don't have an Account? Create account
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Login
