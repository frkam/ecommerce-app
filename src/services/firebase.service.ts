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

export const addDocumentFirestore = async (
  data: object,
  documentPath: string,
  documentPathSegments?: string[]
) => {
  if (documentPathSegments && documentPathSegments.length > 0) {
    const promise = await setDoc(
      doc(db, documentPath, ...documentPathSegments),
      {
        ...data,
      }
    )
    return promise
  }

  const promise = await addDoc(collection(db, documentPath), {
    ...data,
  })

  return promise
}

export const updateDocumentFirestore = async (
  data: object,
  documentPath: string,
  documentPathSegments: string[]
) => {
  const docReference = doc(db, documentPath, ...documentPathSegments)

  const response = await updateDoc(docReference, data)

  return response
}

export const getDocsFromFirestore = async (
  collectionPath: string,
  collectionPathSegments: string[]
) => {
  const collectionRef = collection(
    db,
    collectionPath,
    ...collectionPathSegments
  )

  const docs = await getDocs(collectionRef)

  return docs
}

export const getCollectionsFromFirestore = async <ItemType>(
  collectionPath: string,
  collectionPathSegments: string[]
): Promise<ItemType[]> => {
  const collections: ItemType[] = []

  const docs = await getDocsFromFirestore(
    collectionPath,
    collectionPathSegments
  )

  docs.forEach((doc) => {
    collections.push(doc.data() as ItemType)
  })

  return collections
}
