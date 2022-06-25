import {Request,Response} from 'express'
import rabbitServer from '../rabbit/rabbitServer'
import dotenv from 'dotenv'

dotenv.config()
class rabbitController{
  async PostMessage(req:Request,res:Response){
    const server = new rabbitServer(process.env.RABBITMQ_SERVER as string)
    await server.connect()
    await server.publishInQueue('Qtest', JSON.stringify(req.body))
    res.send(req.body)
  }    
  async consumeMessage(req:Request,res:Response){
    const server = new rabbitServer(process.env.RABBITMQ_SERVER as string)
    await server.connect()
    await server.consumeMessages('Qtest',(message)=>console.log(message.content.toString()))
  } 
  
}
export default new rabbitController
