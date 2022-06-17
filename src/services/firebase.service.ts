/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from 'firebase-config'
import { toast } from 'react-toastify'
import { ISignIn, ISignUp } from 'types/auth.types'

// Authentication

export const signUp = async (user: ISignUp) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password)

    signIn({ email: user.email, password: user.password })
  } catch (error: any) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      toast.error('This email is already used', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
}

export const signIn = async (user: ISignIn) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    )

    return res.user
  } catch (error: any) {
    if (error.message === 'Firebase: Error (auth/wrong-password).') {
      toast.error('You entered wrong password', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      throw new Error(error.message)
    }
    if (error.message === 'Firebase: Error (auth/user-not-found).') {
      toast.error('The user with this email was not found', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      throw new Error(error.message)
    }
  }
}

export const SignOut = async () => {
  const logout = await signOut(auth)
}

// Database

export const addDocFirestore = async (data: object, collectionName: string) => {
  try {
    const res = await addDoc(collection(db, `${collectionName}`), {
      ...data,
    })
    return res
  } catch (error: any) {
    return Promise.reject(new Error(error))
  }
}
