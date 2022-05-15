import FireAuth from "firebase/auth";

export interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAuth extends FireAuth.User {}

export interface ISignIn {
  email: string;
  password: string;
}