/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { auth, db } from 'firebase-config'
import { toast } from 'react-toastify'
import { ISignIn, ISignUp } from 'types/auth.types'
import { ICartItem } from 'types/cart.types'

// Authentication

export const signUp = async (user: ISignUp) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password)

    signIn({ email: user.email, password: user.password })
  } catch (error: any) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      toast.error('This email is already used')
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
      toast.error('You entered wrong password')
      throw new Error(error.message)
    }
    if (error.message === 'Firebase: Error (auth/user-not-found).') {
      toast.error('The user with this email was not found')
      throw new Error(error.message)
    }
  }
}

// Database

export const addDocFirestore = async (
  data: object,
  documentName: string,
  documentNameSegments?: string[]
) => {
  let response
  if (documentNameSegments) {
    response = await setDoc(doc(db, documentName, ...documentNameSegments), {
      ...data,
    })
  } else {
    response = await addDoc(collection(db, `${documentName}`), {
      ...data,
    })
  }
  return response
}

export const updateDocFirestore = async (
  data: object,
  documentName: string,
  documentNameSegments: string[]
) => {
  const docReference = doc(db, documentName, ...documentNameSegments)

  const response = await updateDoc(docReference, data)

  return response
}

export const getItemsFromCart = async (email: string) => {
  const collections: ICartItem[] = []

  const collectionRef = collection(db, 'shop-cart', email, 'cart')

  const docs = await getDocs(collectionRef)

  docs.forEach((doc) => {
    collections.push(doc.data() as ICartItem)
  })

  return collections
}
