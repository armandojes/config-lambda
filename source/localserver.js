import express from 'express'
import api from './api/router'
import rendered from './server/rendered'

const localServer = express()
localServer.use('/api', api)
localServer.get('*', rendered)

localServer.listen(3000, () => console.log('local server stared on port 3000'))
