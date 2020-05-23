import React from 'react'
import { renderToStringAsync } from 'react-fetch-ssr'
import markup from './markup'
import { StaticRouter } from 'react-router'
import App from '../app/app'

const rendered = async (request, response) => {
  const context = {}

  const { content: html, states } = await renderToStringAsync(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>
  )

  const fullHtml = markup(html, states)
  response.send(fullHtml)
  response.end()
}

export default rendered
