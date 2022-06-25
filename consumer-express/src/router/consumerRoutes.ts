import {Router} from 'express'
import rabbitmqController from '../controller/rabbitmqController'

export const consumerRoutes = Router()

consumerRoutes.get('/read', rabbitmqController.consumeMessages)




