import {Request,Response} from 'express'
import dotenv from 'dotenv'
import { rabbitmqServer } from '../rabbit/rabbitServer'

dotenv.config()

class rabbitmqController{
     
  async consumeMessages(req:Request,res:Response){
    const server = new rabbitmqServer(process.env.RABBITMQ_SERVER as string)
    await server.connect()
    await server.consumeMessages('Qtest',(message)=>console.log(message.content.toString()))
    return res.send('done')
  }

}


export default new rabbitmqController
