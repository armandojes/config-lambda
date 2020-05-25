import { Router } from 'express'
import security from './modules/security/router'

const router = Router()

router.use('/security', security)

router.all('*', (request, response) => {
  response.json({error: true})
})

export default router
