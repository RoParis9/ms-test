import express from 'express'
import { rabbitRoute } from './routes/rabbitRoute'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(rabbitRoute)
app.get('/',(req,res)=>{res.send('hello')})


app.listen(3333, ()=>{console.log(`server running on port ${3333}`)})
