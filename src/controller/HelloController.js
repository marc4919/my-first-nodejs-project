
export class HelloController {
  getMessage (name) {
    console.log('[/api/hello] Get Request')

    return {
      message: `Hello, ${name || 'World'}`
    }
  }
}
