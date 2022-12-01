import Fastify from 'fastify'
import routes from './routes/index.js'
import fastifySwagger from '@fastify/swagger'
import { swaggerConfig } from './config/swagger.js'
import db from './lib/db.js'

const server = Fastify({
  logger: true,
})

db.user
  .create({
    data: {
      username: 'perfume',
      passwordHash: '234567',
    },
  })
  .then(console.log)

await server.register(fastifySwagger, swaggerConfig)
server.register(routes)

server.listen({ port: 4000 })
