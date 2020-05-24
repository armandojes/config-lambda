import { Router } from 'express'
import rendered from './rendered'

const server = Router()

server.get('*', rendered)

export default server
