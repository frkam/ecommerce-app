import { PageHero } from 'components/UI/pageHero'
import { Navigate, NavLink } from 'react-router-dom'
import LoginForm from './loginForm'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'firebase-config'

const Login = () => {
  const [user, loading] = useAuthState(auth)

  if (user) {
    return <Navigate to="/" replace />
  }

  const breadCrumbs = [
    {
      title: 'login',
      link: `/login`,
    },
  ]

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Login</PageHero>
      <div className="flex justify-center main-container">
        <div className="flex flex-col items-center w-[34rem] tn:p-12 p-2 shadow-card">
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
