import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


import { ISignUp, ISignIn } from "types/auth.types";

import { auth } from "firebase-config";
import { useDispatch } from "react-redux";

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
