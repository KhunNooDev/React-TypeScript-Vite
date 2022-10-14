import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import { store } from './redux/store'

import ThemeComponent from './theme/ThemeComponent'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeComponent>
          <App />
        </ThemeComponent>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
