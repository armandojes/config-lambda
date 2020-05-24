import { Router } from 'express'
import router from './router'

const mainRouter = Router()

mainRouter.use('/api', router)

export default mainRouter
