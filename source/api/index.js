import { Router } from 'express'
import router from './router'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://app:helloforyou@master-abt0h.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

const mainRouter = Router()

mainRouter.use('/api', router)

export default mainRouter
