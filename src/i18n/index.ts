import i18next, { i18n as i18nInstance, Namespace } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { languages, namespaces, getNamespaces } from './i18n.constants'
import HttpApi from 'i18next-http-backend'
import { isBoolean } from 'utils/UtilsData'

const createI18n = (language?: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next)

  i18n
    .use(HttpApi) // Use backend plugin for translation file download.
    .init({
      backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json', // Specify where backend will find translation files.
      },
      lng: language,
      fallbackLng: language,
      // ns: namespaces.common,
      // ns: ['common', 'pages.signin', 'pages.signup'],
      ns: getNamespaces(namespaces),
      // debug: true,
    })

  return i18n
}

const getLanguage = (localStorage.getItem('language') as string) || languages.th
//if
const language = hasValueObj(languages, getLanguage) ? getLanguage : languages.th
function hasValueObj(obj: object, value: string) {
  for (var id in obj) {
    if (obj[id as keyof {}] == value) return true
  }
  return false
}

export const i18n = createI18n(language) //(languages.th)

export function customTranslation(dns?: Namespace) {
  // dns => default namespace
  const { t: trans, i18n } = useTranslation(dns)

  const t = (key: string, isCommon?: boolean, ns?: Namespace) => {
    // return trans<string>(key, { ns: namespaces.pages.signin })
    return isCommon ? trans<string>(key, { ns: namespaces.common }) : trans<string>(key, { ns: ns })
  }
  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  return { t, changeLanguage }
}

export * from './i18n.constants'
