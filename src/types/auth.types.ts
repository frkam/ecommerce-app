import FireAuth from 'firebase/auth'

export interface ISignUp {
  email: string
  password: string
  confirmPassword: string
}

export type IAuth = FireAuth.User

export interface ISignIn {
  email: string
  password: string
}

export interface IMessageData {
  name: string
  email: string
  subject: string
  message: string
}
