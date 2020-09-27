import { Router } from 'express'

const router = Router()

router.all('*', (request, response) => {
  response.json({ error: true })
})

export default router
