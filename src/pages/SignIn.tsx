import React from 'react'
import Form, { InputText, InputPass, InputCheckbox } from '../components/TML/TMLForm'

export default function SignIn() {
  const onSubmit = (data: object) => console.log(data)
  return (
    <>
      <Form
        header='Sign in'
        submit='Sign In'
        onSubmit={onSubmit}
        linkl={{ to: '/forgotpassword', txt: `Forgot password?` }}
        linkr={{ to: '/signup', txt: `Don't have an account? Sign Up` }}
      >
        <InputText name='email' label='Email Address' sm={12} required autoFocus />
        <InputText name='password' label='Password' sm={12} required />
        <InputCheckbox name='cb_remember' label='Remember me' />
      </Form>
    </>
  )
}
