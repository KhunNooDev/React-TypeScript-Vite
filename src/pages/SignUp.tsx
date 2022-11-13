import React from 'react'
import Form, { InputText, InputPass, InputCheckbox } from 'components/TML/TMLForm'
import { namespaces } from 'i18n'

export const SignUp = () => {
  const onSubmit = (data: object) => console.log(data)
  return (
    <>
      <Form
        namespace={namespaces.pages.signup}
        header //={t('title')}
        submit //={t('btn_submit')}
        onSubmit={onSubmit}
        linkr={{ to: '/signin', txt: 'Already have an account? Sign in' }}
      >
        <InputText name='firstName' required autoFocus />
        <InputText name='lastName' required />
        <InputText name='email' sm={12} />
        <InputPass name='password' sm={12} />
        {/* <Grid item xs={12} sm={6}>
          other
        </Grid> */}
        <InputCheckbox name='cb_get_promotions' />
      </Form>
    </>
  )
}
