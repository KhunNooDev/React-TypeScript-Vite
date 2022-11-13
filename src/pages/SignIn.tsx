import React from 'react'
import Form, { InputText, InputPass, InputCheckbox, InputSelect } from 'components/TML/TMLForm'
import { customTranslation, namespaces } from 'i18n'

export const SignIn = () => {
  const { t, changeLanguage } = customTranslation(namespaces.pages.signin)

  const onSubmit = (data: object) => console.log(data)

  const menus = [
    { key: 1, value: '1' },
    { key: 2, value: '2' },
    { key: 3, value: '3' },
  ]
  return (
    <>
      <Form
        namespace={namespaces.pages.signin}
        header //={t('title')}
        submit //={t('btn_submit')}
        // header={t('title')}
        // submit={t('btn_submit')}
        onSubmit={onSubmit}
        linkl={{ to: '/forgotpassword', txt: `Forgot password?` }}
        linkr={{ to: '/signup', txt: `Don't have an account? Sign Up` }}
      >
        <InputText name='email' label={t('email')} sm={12} required autoFocus />
        <InputPass name='password' sm={12} required='error custom text' />
        <InputCheckbox name='cb_remember' />
        {/* <InputSelect name='age' label='Age' sm={5} menus={menus} required='sss' showClear /> */}
      </Form>
    </>
  )
}
