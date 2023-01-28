import { isObject } from 'utils/UtilsData'

export const getNamespaces = (ns: object) => {
  var arr: string[] = []
  var namespaces = Object.values(ns)
  namespaces.forEach((namespace) => {
    if (isObject(namespace)) {
      arr = getNamespaces(namespace)
    } else {
      arr.push(namespace)
    }
  })
  return arr
}

export const namespaces = {
  pages: {
    hello: 'pages.hello',
    signin: 'pages.signin',
    allinput: 'pages.allinput',
    signup: 'pages.signup',
  },
  common: 'common',
}

export const languages = {
  th: 'th',
  en: 'en',
}
