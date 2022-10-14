import { useDispatch } from 'react-redux'
import { Paper, FormGroup, FormControlLabel, Switch, Typography } from '@mui/material'
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
    </Paper>
  )
}
