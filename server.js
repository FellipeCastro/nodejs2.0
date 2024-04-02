// Servidor Nativo

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello world')
    
//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'
import { databaseMemory } from './databaseMemory.js'

const server = fastify()

const database = new databaseMemory()

server.post('/videos', () => {
    database.create({
        title: 'Video 01',
        description: 'Este é o video 01',
        duration: 180,
    })
})

server.get('/videos', () => {
    
})

server.put('/videos/:id', () => {
    
})

server.delete('/videos/:id', () => {
    
})

server.listen({
    port: 3333,
})
