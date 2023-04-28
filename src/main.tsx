import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'

import 'i18n'

import App from 'App'
import BackdropLoading from 'components/BackdropLoading'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <React.Suspense fallback={<BackdropLoading />}>
    {/* {<>Loading...</>}> */}
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          {/* <HashRouter> */}
          <App />
          {/* </HashRouter> */}
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.Suspense>
  // </React.StrictMode>
)
