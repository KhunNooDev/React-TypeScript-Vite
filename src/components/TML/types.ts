import { GridSize, TextFieldProps } from '@mui/material'
import { Namespace } from 'i18next'
import { ControllerProps, SubmitHandler } from 'react-hook-form'
import { To } from 'react-router-dom'

type children = Exclude<React.ReactNode, null | undefined>
/**
 *
 */
export interface PropsForm {
  namespace?: Namespace
  header?: String | Boolean
  children: any //i don't know type
  submit?: String | Boolean
  linkl?: {
    to: To
    txt: String
  }
  linkr?: {
    to: To
    txt: String
  }
  defaultValues?: object
  onSubmit: SubmitHandler<object>
}

/**
 *
 */
export type PropsInput = {
  xs?: GridSize
  sm?: GridSize
  required?: boolean | string
  showClear?: boolean | string
  namespace?: Namespace
  t?: Function
} & Omit<ControllerProps, 'render'> &
  Omit<TextFieldProps, 'required'>

/**
 *
 */
export type PropsSelect = {
  menus: {
    key: string | number
    value: string
  }[]
} & PropsInput
