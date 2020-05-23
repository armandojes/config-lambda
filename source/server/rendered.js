import react from 'react'
import { renderToString } from 'react-dom/server'
import markup from './markup'

const rendered = (request, response) => {
  response.send(markup())
}

export default rendered