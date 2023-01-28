import { NavigationTypeArr } from 'App'

/** Check type of value is number */
export function isNumber(x: any): x is number {
  return typeof x === 'number'
}
/** Check type of value is string */
export function isString(x: any): x is string {
  return typeof x === 'string'
}
/** Check type of value is boolean */
export function isBoolean(x: any): x is boolean {
  return typeof x === 'boolean'
}
/** Check type of value is object */
export function isObject(x: any): x is object {
  return typeof x === 'object'
}

export function addDepthNavigationType(nav: NavigationTypeArr, depth = 0): NavigationTypeArr {
  nav.forEach((obj) => {
    obj.depth = depth
    if (obj.subMenu) addDepthNavigationType(obj.subMenu, depth + 1)
  })
  return nav
}

// export const UtilsData = {
//   isNumber: function isNumber(x: any): x is number {
//     return typeof x === 'number'
//   },
//   isString: function isString(x: any): x is string {
//     return typeof x === 'string'
//   },
// }
