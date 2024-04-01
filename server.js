// Servidor Nativo

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello world')
    
//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello World'
})

server.listen({
    port: 3333,
})
