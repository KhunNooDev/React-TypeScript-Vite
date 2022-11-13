import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

import { isString } from 'utils/UtilsData'
import { customTranslation } from 'i18n'
import { PropsForm, PropsInput, PropsSelect } from './types'

export default function Form(props: PropsForm) {
  const { namespace, defaultValues, children, onSubmit } = props
  const { t } = customTranslation(namespace)

  const { handleSubmit, control } = useForm({ defaultValues })

  const childrenMap = (
    <>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props
              ? child.props.name
                ? React.createElement(child.type, {
                    ...{
                      key: child.props.name,
                      ...child.props,
                      control,
                      namespace,
                      t,
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
                namespace,
                t,
              },
            })
          : children
        : children}
    </>
  )
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
                {!!namespace ? t('title') : isString(props.header) ? props.header : 'Title'}
              </Typography>
            </>
          )}
          <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {childrenMap}
            </Grid>
            {!!props.submit && (
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                {/* {props.submit} */}
                {!!namespace ? t('btn_submit') : isString(props.submit) ? props.submit : 'Submit'}
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
            label={!!props.label ? props.label : !!props.namespace ? props.t && props.t(props.name) : props.name}
            // label={props.label || props.name}
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
            label={!!props.label ? props.label : !!props.namespace ? props.t && props.t(props.name) : props.name}
            // label={props.label || props.name}
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
            label={!!props.label ? props.label : !!props.namespace ? props.t && props.t(props.name) : props.name}
            // label={props.label || props.name}
          />
        )}
      />
    </Grid>
  )
}

export function InputSelect(props: PropsSelect) {
  const labelId = `${props.name}-label`
  return (
    <Grid item xs={props.xs || 12} sm={props.sm || 6}>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: props.required }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <FormControl fullWidth error={!!error} required={!!props.required}>
            <InputLabel id={labelId}>{props.label}</InputLabel>
            <Select
              labelId={labelId}
              id={props.id || props.name}
              name={props.name}
              label={!!props.label ? props.label : !!props.namespace ? props.t && props.t(props.name) : props.name}
              // label={props.label || props.name}
              value={value || ''}
              onChange={onChange}
              // helperText={error ? error.message : null}
              autoComplete={props.autoComplete || props.name}
              autoFocus={props.autoFocus}
            >
              {!!props.showClear && (
                <MenuItem value=''>
                  <em>{isString(props.showClear) ? props.showClear : 'None'}</em>
                </MenuItem>
              )}
              {props.menus.map((menu) => (
                <MenuItem value={menu.key}>{menu.value}</MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </Grid>
  )
}
