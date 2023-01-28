import React from 'react'
import Form, { InputText, InputPass, InputCheckbox, InputSelect } from 'components/TML/TMLForm'
import { customTranslation, namespaces } from 'i18n'

export const ExInputText = () => {
  const { t } = customTranslation(namespaces.pages.allinput)

  const onSubmit = (data: object) => console.log(data)

  return (
    <>
      <Form
        namespace={namespaces.pages.allinput}
        header //={t('title')}
        submit //={t('btn_submit')}
        // header={t('title')}
        // submit={t('btn_submit')}
        onSubmit={onSubmit}
        linkl={{ to: '/forgotpassword', txt: `Forgot password?` }}
        linkr={{ to: '/signup', txt: `Don't have an account? Sign Up` }}
      >
        <InputText name='email' label={t('email')} sm={12} required autoFocus />
      </Form>
    </>
  )
}
