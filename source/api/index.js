import { Router } from 'express'

const server = Router()

server.get('*', (request, response) => {
  response.send(`${request.url}, 'from api'`)
})

export default server;