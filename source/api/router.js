import { Router } from 'express'
import security from './modules/security/router'

const router = Router()

router.use('/security', security)

router.all('*', (request, response) => {
  response.send(`${request.url} error handler`)
})

export default router
