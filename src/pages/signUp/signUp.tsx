import { PageHero } from 'components/UI/pageHero'
import { Navigate, NavLink } from 'react-router-dom'
import SignUpForm from './signUpForm'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'firebase-config'

const SignUp = () => {
  const [user] = useAuthState(auth)

  if (user) {
    return <Navigate to="/profile" replace />
  }

  const breadCrumbs = [
    {
      title: 'sign up',
      link: `/sign-up`,
    },
  ]

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Sign Up</PageHero>
      <div className="flex justify-center main-container">
        <div className="flex flex-col items-center w-[34rem] tn:p-12 p-2 shadow-card">
          <h1 className="text-black font-josefin-sans text-[34px] font-bold">
            Sign Up
          </h1>
          <p className="font-lato text-[17px] text-text-sub-dark-500 pb-9">
            Please enter your data into form below
          </p>
          <SignUpForm />
          <NavLink to="/login" className="text-text-sub-dark-500 mt-7">
            Already have an account? Login
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default SignUp
