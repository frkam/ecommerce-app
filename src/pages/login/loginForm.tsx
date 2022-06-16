import { Button } from 'components/UI/button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
// import { toast } from 'react-toastify'
import { object, string } from 'yup'

const validationSchema = object({
  email: string().email('This must be an email').required('Email is required'),
  password: string()
    .min(8, 'Password is too short')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
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

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => alert(values.password)}
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
              />
              <ErrorMessage
                name="password"
                component="span"
                className="input-error-msg"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
