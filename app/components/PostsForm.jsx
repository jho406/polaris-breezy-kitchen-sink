import React from 'react'
import { Formik, Form, Field } from 'formik';

export default React.forwardRef(
  ({initialValues = {
    body:'',
  }, onSubmit}, ref) => {
   return (
     <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        ref={ref}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="body" />
            {errors.body && touched.body && errors.body}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    )
  }
)
