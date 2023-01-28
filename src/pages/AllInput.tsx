import React from 'react'
import Form, { InputText, InputPass, InputCheckbox, InputSelect } from 'components/TML/TMLForm'
import { customTranslation, namespaces } from 'i18n'

export const AllInput = () => {
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
        <InputCheckbox name='checkbox defaultChecked' defaultChecked />
        <InputCheckbox name='checkbox checked' checked />
        <InputCheckbox name='checkbox' />
        <InputCheckbox name='checkbox disabled' disabled />
        <InputCheckbox name='checkbox disabled checked' disabled checked />
        <InputCheckbox name='checkbox label' label='Label' />
        <InputCheckbox name='checkbox label disabled' label='Label' disabled />
        <InputCheckbox name='checkbox defaultChecked checkSize30' defaultChecked checkSize={30} />
        <InputCheckbox name='checkbox color="secondary"' color='secondary' />
      </Form>
    </>
  )
}
