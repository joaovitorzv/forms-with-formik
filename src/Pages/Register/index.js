import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { FormContainer, ErrorText } from '../../global';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email('Put a valid email').required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirm_password: Yup.string()
  .required('Password confirmation is required')
  .oneOf([Yup.ref("password")], "Both password need to be the same")
});

export default function Register() {
  const emailsAlreadyInUse = [];

  function handleSubmit(values, { 
    setSubmitting,
    setFieldError
  }) {
    setTimeout(() => {
      if (values.email === 'teste123@teste.com') {
          setFieldError('email', 'email already registered');
          emailsAlreadyInUse.push(values.email);
          setSubmitting(false);
      } else {
          alert(JSON.stringify(values))
          setSubmitting(false);
      }
    }, 100);
  }

  return (
    <FormContainer>
      <h1>Register</h1>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={handleSubmit}
        validate={
          values => {
            let errors = {};
            if (emailsAlreadyInUse.includes(values.email)) {
              errors.email = 'email is already in use';
            } 
            return errors;
          }
        }
      > 
        {({ handleSubmit, handleChange, values, touched, isSubmitting, handleBlur, errors }) => (
        <form onSubmit={handleSubmit}>
          <input 
            name="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            type="text" 
            placeholder="Full name"
          />
          {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}

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
          
          <input 
            name="confirm_password"
            onChange={handleChange}
            value={values.confirm_password}
            onBlur={handleBlur}
            type="password" 
            placeholder="Confirm password" 
          />
          {errors.confirm_password && touched.confirm_password && <ErrorText>{errors.confirm_password}</ErrorText>}

          <button type="submit">
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>
        </form>
        )}
      </Formik>

      <a href="/login">Already Have an account?</a>
    </FormContainer>
  )
}