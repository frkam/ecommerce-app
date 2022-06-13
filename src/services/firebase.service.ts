import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { ISignUp, ISignIn } from "types/auth.types";

import { auth, db } from "firebase-config";

import { collection, addDoc } from "firebase/firestore";

// Authentication

export const signUp = async (user: ISignUp) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    return res.user;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const signIn = async (user: ISignIn) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    return res.user;
  } catch (error: any) {
    console.error(error.message);
  }
};

// Database

export const addDocFirestore = async (data: object, collectionName: string) => {
  try {
    const res = await addDoc(collection(db, `${collectionName}`), {
      ...data,
    });
    return res;
  } catch (e: any) {
    return Promise.reject(new Error(e));
  }
};
