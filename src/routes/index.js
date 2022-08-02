// Root Router - redirections to routes

import express from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '../utils/LogInfo'

// Server instance
const server = express()

// Router instance
const rootRouter = express.Router()

// Activate for request http://localhost:8000/api

// GET: http://localhost:8000/api
rootRouter.get('/', (req, res) => {
  LogInfo('GET: http://localhost:8000/api')
  res.send('Hello World! :)')
})

// Redirections to routes & controllers
server.use('/', rootRouter)
server.use('/hello', helloRouter)

export default server
