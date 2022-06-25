import {Router} from 'express'
import rabbitController from '../controller/rabbitController'

export const rabbitRoute = Router()

rabbitRoute.post('/rabbit',rabbitController.PostMessage)
rabbitRoute.get('/read',rabbitController.consumeMessage)

