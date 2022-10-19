import React from 'react'
import { Controller, ControllerProps, SubmitHandler, useForm } from 'react-hook-form'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  GridSize,
  TextField,
  TextFieldProps,
  Typography,
  Link,
} from '@mui/material'
import { Link as RouterLink, To } from 'react-router-dom'
import { LockOutlined } from '@mui/icons-material'

type children = Exclude<React.ReactNode, null | undefined>
interface PropsForm {
  header?: String
  children: any //i don't know type
  submit?: String
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

export default function Form(props: PropsForm) {
  const { defaultValues, children, onSubmit } = props

  const { handleSubmit, control } = useForm({ defaultValues })

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!!props.header && (
            <>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined />
              </Avatar>
              <Typography component='h1' variant='h5'>
                {props.header}
              </Typography>
            </>
          )}
          <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {Array.isArray(children)
                ? children.map((child) => {
                    return child.props
                      ? child.props.name
                        ? React.createElement(child.type, {
                            ...{
                              key: child.props.name,
                              ...child.props,
                              control,
                            },
                          })
                        : child
                      : child
                  })
                : children.props
                ? children.props.name
                  ? React.createElement(children.type, {
                      ...{
                        key: children.props.name,
                        ...children.props,
                        control,
                      },
                    })
                  : children
                : children}
            </Grid>
            {!!props.submit && (
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                {props.submit}
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                {props.linkl && (
                  <Link component={RouterLink} to={props.linkl.to} variant='body2'>
                    {props.linkl.txt}
                  </Link>
                )}
              </Grid>
              <Grid item>
                {props.linkr && (
                  <Link component={RouterLink} to={props.linkr.to} variant='body2'>
                    {props.linkr.txt}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

type PropsInput = {
  xs?: GridSize
  sm?: GridSize
  required?: boolean | string
} & Omit<ControllerProps, 'render'> &
  Omit<TextFieldProps, 'required'>

export function InputText(props: PropsInput) {
  return (
    <Grid item xs={props.xs || 12} sm={props.sm || 6}>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: props.required }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <TextField
            id={props.id || props.name}
            name={props.name}
            label={props.label || props.name}
            value={value || ''}
            onChange={onChange}
            fullWidth
            required={!!props.required}
            error={!!error}
            helperText={error ? error.message : null}
            autoComplete={props.autoComplete || props.name}
            autoFocus={props.autoFocus}
          />
        )}
      />
    </Grid>
  )
}

export function InputPass(props: PropsInput) {
  return (
    <Grid item xs={props.xs || 12} sm={props.sm || 6}>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: props.required }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <TextField
            type='password'
            id={props.id || props.name}
            name={props.name}
            label={props.label || props.name}
            value={value || ''}
            onChange={onChange}
            fullWidth
            required={!!props.required}
            error={!!error}
            helperText={error ? error.message : null}
            autoComplete={props.autoComplete || props.name}
            autoFocus={props.autoFocus}
          />
        )}
      />
    </Grid>
  )
}

export function InputCheckbox(props: PropsInput) {
  return (
    <Grid item xs={props.xs || 12}>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <FormControlLabel
            control={
              <Checkbox
                id={props.id || props.name}
                name={props.name}
                value={value}
                onChange={onChange}
                color='primary'
              />
            }
            label={props.label || props.name}
          />
        )}
      />
    </Grid>
  )
}

// export function Select({ register, options, name, ...rest }) {
//   return (
//     <select {...register(name)} {...rest}>
//       {options.map((value) => (
//         <option value={value}>{value}</option>
//       ))}
//     </select>
//   );
// }
