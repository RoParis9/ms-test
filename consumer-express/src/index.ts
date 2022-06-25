import express from 'express'
import { consumerRoutes } from './router/consumerRoutes'

const app = express()

app.use(express.json())
app.use(consumerRoutes)

app.listen(3000,()=>{console.log(`server is running`)})
