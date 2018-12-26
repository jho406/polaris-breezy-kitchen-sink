import React from 'react'
import { Formik } from 'formik'
import {FormLayout, TextField, InlineError} from '@shopify/polaris'

export default React.forwardRef(
  ({initialValues = {
    body:'',
  }, onSubmit, onAnyFieldChange}, ref) => {

   return (
     <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        ref={ref}
        validate={()=> onAnyFieldChange()}
      >
        {({ errors, touched, setFieldValue, setFieldTouched, isSubmitting, values }) => (
          <FormLayout>
            <TextField
              type='text'
              label="body"
              onChange={(value) => {setFieldValue('body', value)}}
              onBlur ={() => {setFieldTouched('body')}}
              value={values.body}
            />
            {errors.body &&
              touched.body &&
                <InlineError message={errors.body} fieldID="body" />
            }
          </FormLayout>
        )}
      </Formik>
    )
  }
)
