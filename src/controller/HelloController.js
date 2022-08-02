import { LogSuccess } from '../utils/LogSuccess'

export class HelloController {
  getMessage (name) {
    LogSuccess('[/api/hello] Get Request')

    return {
      message: `Hello, ${name || 'World'}`
    }
  }
}
