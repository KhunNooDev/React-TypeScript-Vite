import { useDispatch } from 'react-redux'
import { Paper, FormGroup, FormControlLabel, Switch, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { asyncToggleTheme } from '../redux/theme/themeSlice'
// get theme from store
import { getDarkThemeState } from '../redux/theme/selectors'

export default function App() {
  // initialize dispatch variable
  const dispatch = useDispatch()

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={getDarkThemeState()} onChange={() => dispatch(asyncToggleTheme())} />}
            label='Toggle Theme'
          />
        </FormGroup>
      </div>
    )
  }

  return (
    <Paper className='HomePaper'>
      <ToggleSwitch />
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1' className='testcss'>
        It's Blue
      </Typography>
      <Link component={RouterLink} to='/signin' variant='body2'>
        SignIn
      </Link>
      <Link component={RouterLink} to='/signup' variant='body2'>
        SignUp
      </Link>
    </Paper>
  )
}
