import { Button } from 'components/UI/button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { signUp } from 'services/firebase.service'
import { object, ref, string } from 'yup'

const validationSchema = object({
  email: string().email('This must be an email').required('Email is required'),
  password: string()
    .min(8, 'Password is too short')
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Repeated password is required'),
})

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

const inputClass = (touched?: boolean, error?: string) => {
  if (!error && !touched) {
    return 'input--ok'
  }

  if (error && touched) {
    return 'input--error'
  }

  if (!error && touched) {
    return 'input--successfull'
  }
}

const SignUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        signUp(values)
        resetForm()
      }}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {(props) => {
        const { errors, touched, isValid, dirty, values } = props
        return (
          <Form className="flex flex-col gap-2 w-full">
            <div className="input-error-container">
              <Field
                id="email"
                name="email"
                placeholder="Your Email*"
                value={values.email}
                className={`input ${inputClass(touched.email, errors.email)}`}
                required
                autoComplete="off"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="input-error-msg"
              />
            </div>
            <div className="input-error-container">
              <Field
                id="password"
                name="password"
                placeholder="Your Password*"
                value={values.password}
                className={`input ${inputClass(
                  touched.password,
                  errors.password
                )}`}
                required
                type="password"
                autoComplete="off"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="input-error-msg"
              />
            </div>
            <div className="input-error-container">
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repeat your password*"
                value={values.confirmPassword}
                className={`input ${inputClass(
                  touched.confirmPassword,
                  errors.confirmPassword
                )}`}
                required
                type="password"
                autoComplete="off"
              />
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className="input-error-msg"
              />
            </div>
            <Button
              className="mt-4 font-josefin-sans w-full"
              type="submit"
              disabled={!(dirty && isValid)}
            >
              Sign Up
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
