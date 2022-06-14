/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from 'firebase-config'
import { ISignIn, ISignUp } from 'types/auth.types'

// Authentication

export const signUp = async (user: ISignUp) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    )

    return res.user
  } catch (error: any) {
    console.error(error.message)
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
    console.error(error.message)
  }
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
