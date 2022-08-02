import express from 'express'
import { HelloController } from '../controller/HelloController'
import { LogInfo } from '../utils/LogInfo'

// Router from express
const helloRouter = express.Router()

// GET -> http://localhost:8000/api/hello?name=Martin/
helloRouter.route('/')
  .get(async (req, res) => {
  // Obtain a Query param
    const name = req?.query?.name
    LogInfo(`Query Param -> ${name}`)
    const controlador = new HelloController()
    // Obtain Response
    const response = await controlador.getMessage(name)
    // Send to the client the response
    return res.send(response)
  })

export default helloRouter
