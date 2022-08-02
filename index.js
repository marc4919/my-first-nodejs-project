import server from './src/server/index.js'
import dotenv from 'dotenv'

// Configuration .env file
dotenv.config()

const port = process.env.PORT || 8000

// Execute server
server.listen(port, () => {
  console.log(`[SERVER ON]: Running on http://localhost:${port}/api`)
})

// Error server
server.on('error', (error) => {
  console.log(`[SERVER ERROR]: ${error}`)
})
