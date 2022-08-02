import express from 'express'

// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO HTTPS

// Root Router
import rootRouter from '../routes/index.js'

// Create express APP
const server = express()

// Define Server to use "/api" and use root Router from 'index.js' in routes
// From this point onover: http://localhost:8000/api
server.use(
  '/api',
  rootRouter
)

// TODO Mongoose Connection

// Security Configuration
server.use(helmet())
server.use(cors())

// Content Config
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// * Redirection Config
// http://localhost:8000/ --> http://localhost:8000/api
server.get('/', (req, res) => {
  res.redirect('/api')
})

export default server
