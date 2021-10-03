import React, { Fragment } from 'react'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import 'normalize.css'
import App from './app'
import { GlobalStyles } from './global-styles'

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root')
)
