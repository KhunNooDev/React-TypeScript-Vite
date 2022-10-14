import { useSelector } from 'react-redux'
import { RootState } from '../store'

export function getDarkThemeState() {
  return useSelector((state: RootState) => state.theme.darkTheme)
}
