import 'react-toastify/dist/ReactToastify.css'
import { Button } from 'components/UI/button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { object, string } from 'yup'
import { addDocFirestore } from '../../services/firebase.service'

const supportMessageSchema = object({
  name: string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(30, 'Name is too long'),
  email: string()
    .email('This must be an email')
    .required('Password is required'),
  subject: string()
    .min(12, 'Subject is too short')
    .max(200, 'Subject is too long')
    .required('Subject is required'),
  message: string()
    .min(25, 'Message is too short')
    .required('Message is required'),
})

interface Values {
  name: string
  email: string
  subject: string
  message: string
}

const initialValues: Values = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const ContactForm = () => {
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

  const submitHandler = (data: object) => {
    const promise = addDocFirestore(data, 'support-messages')
    toast.promise(promise, {
      pending: 'Your message is being sent...',
      success: 'Your message was sent',
      error: "Your message wasn't sent",
    })
  }

  return (
    <div>
      <h1 className="contact-header">Get In Touch</h1>
      <p className="max-w-[34.375rem] contact-text mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
        bibendum quam.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          submitHandler(values)
          resetForm()
        }}
        validationSchema={supportMessageSchema}
        validateOnBlur
      >
        {(props) => {
          const { errors, touched, isValid, dirty, values } = props
          return (
            <Form className="mt-10 max-w-[34.375rem]">
              <div className="mb-5 flex tn:flex-row flex-col gap-y-5 tn:gap-y-0 tn:gap-x-6">
                <div className="input-error-container">
                  <Field
                    id="name"
                    name="name"
                    placeholder="Your Name*"
                    value={values.name}
                    className={`input ${inputClass(touched.name, errors.name)}`}
                    required
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="input-error-msg"
                  />
                </div>
                <div className="input-error-container">
                  <Field
                    id="email"
                    name="email"
                    placeholder="Your Email*"
                    value={values.email}
                    className={`input ${inputClass(
                      touched.email,
                      errors.email
                    )}`}
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="input-error-msg"
                  />
                </div>
              </div>
              <div>
                <div className="input-error-container">
                  <Field
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                    value={values.subject}
                    className={`input ${inputClass(
                      touched.subject,
                      errors.subject
                    )}`}
                    required
                  />
                  <ErrorMessage
                    name="subject"
                    component="span"
                    className="input-error-msg"
                  />
                </div>
                <div className="input-error-container mt-5">
                  <Field
                    id="message"
                    as="textarea"
                    name="message"
                    placeholder="Type Your Message*"
                    required
                    value={values.message}
                    className={`contact-textarea ${inputClass(
                      touched.message,
                      errors.message
                    )}`}
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="input-error-msg"
                  />
                </div>
              </div>
              <Button
                className="mt-4 font-josefin-sans"
                type="submit"
                disabled={!(dirty && isValid)}
              >
                Send Mail
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
