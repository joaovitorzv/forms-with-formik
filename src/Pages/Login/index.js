import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { FormContainer, ErrorText } from '../../global';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Put a valid email').required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

export default function Login() {
  function handleSubmit(values, { 
    setSubmitting,
    setFieldError
  }) {
    setTimeout(() => {
      if (values.password !== '123456') {
          setFieldError('password', 'Invalid password or email')
          setSubmitting(false);
      } else {
          alert(JSON.stringify(values))
          setSubmitting(false);
      }
    }, 100);
  }

  return (
    <FormContainer>
      <h1>Login</h1>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, isSubmitting, handleBlur, errors }) => (
        <form onSubmit={handleSubmit}>
          <input 
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            type="text" 
            placeholder="Email"  
          />
          {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}

          <input 
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            type="password" 
            placeholder="Password" 
          />
          {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
          
          <button type="submit">
            {isSubmitting ? 'Login in...' : 'Login'}
          </button>
        </form>
        )}
      </Formik>

      <a href="/register">Already Have an account?</a>
    </FormContainer>
  )
}