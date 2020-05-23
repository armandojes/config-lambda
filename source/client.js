import React from 'react'
import { hydrate } from 'react-dom'
import App from './app/app'

hydrate(<App />, document.getElementById('render_target'))
