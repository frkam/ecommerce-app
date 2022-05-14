import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { ISignUp } from "types/auth.types";

import { auth } from "firebase-config";

export const signUp = async (user: ISignUp) => {
  try {
    const res = createUserWithEmailAndPassword(auth, user.email, user.password);
  } catch (error: any) {
    console.error(error.message);
  }
};
