import { auth } from 'firebase-config'
import { useEffect, useState } from 'react'
import { SignOut } from 'services/firebase.service'

const Profile = () => {
  const [userData, setUserData] = useState(auth.currentUser)

  return userData ? (
    <div>
      {userData.email}
      <button
        onClick={() => {
          setUserData(null)
          return SignOut
        }}
      >
        Sign Out
      </button>
    </div>
  ) : (
    <div>
      Login first!
      <button onClick={() => console.log(auth.currentUser)}>kek</button>
    </div>
  )
}

export default Profile
