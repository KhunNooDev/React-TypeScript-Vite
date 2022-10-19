import React from 'react'
import Form, { InputText, InputPass, InputCheckbox } from '../components/TML/TMLForm'

export default function SignUp() {
  const onSubmit = (data: object) => console.log(data)
  return (
    <>
      <Form
        header='Sign up'
        submit='Sign up'
        onSubmit={onSubmit}
        linkr={{ to: '/signin', txt: 'Already have an account? Sign in' }}
      >
        <InputText name='firstName' label='First Name' required autoFocus />
        <InputText name='lastName' label='Last Name' required />
        <InputText name='email' label='Email Address' sm={12} />
        <InputPass name='password' label='Password' sm={12} />
        {/* <Grid item xs={12} sm={6}>
          other
        </Grid> */}
        <InputCheckbox
          name='cb_get_promotions'
          label='I want to receive inspiration, marketing promotions and updates via email.'
        />
      </Form>
    </>
  )
}
