// No other way than this brute force.
// https://github.com/eslint/eslint/issues/1867
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App.jsx'
import InitializeActions from './actions/initializeActions'
/* eslint-enable no-unused-vars */

InitializeActions.initApp()
ReactDOM.render(<App />, document.getElementById('root'))
