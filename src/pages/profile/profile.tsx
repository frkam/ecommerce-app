import { Button } from 'components/UI/button'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'
import { PageHero } from 'components/UI/pageHero'

const Profile = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  if (loading) return <div>loading..</div>

  const breadCrumbs = [
    {
      link: `/profile`,
      title: 'Profile',
    },
  ]

  return (
    <section>
      <PageHero breadCrumbs={breadCrumbs}>Profile</PageHero>
      <div className="main-container flex flex-col justify-start items-center">
        <div className="flex flex-col gap-2">
          <img
            src={`https://i.pravatar.cc/200?u=${user?.email}`}
            alt="Profile"
            className="rounded-full place-self-center"
          />
          <h2 className="font-josefin-sans font-medium text-text mt-4 text-2xl">
            {user?.email}
          </h2>
          <p className="font-medium text-text-sub-dark-500 text-base">
            Account was created at: {user?.metadata.creationTime}
          </p>
          <p className="font-medium text-text-sub-dark-500 text-base">
            Last sign in in: {user?.metadata.lastSignInTime}
          </p>
          <Button
            сlickHandler={() => {
              signOut(auth)
              navigate('/')
            }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Profile
