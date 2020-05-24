import { Router } from 'express'
import createToken from './controllers/get_token'

const router = Router()

router.get('/get-token', createToken)

export default router
